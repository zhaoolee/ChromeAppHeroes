/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(async (browser) => {
  const DEBUG = true;

  const SUPPORTS_TEXT_FRAGMENTS =
    'fragmentDirective' in Location.prototype ||
    'fragmentDirective' in document;

  // https://wicg.github.io/ScrollToTextFragment/#:~:text=It%20is%20recommended,a%20range%2Dbased%20match.
  // Experimenting with 100 instead.
  const EXACT_MATCH_MAX_CHARS = 100;
  const CONTEXT_MAX_WORDS = 5;

  const log = (...args) => {
    if (DEBUG) {
      console.log(...args);
    }
  };

  const injectContentScript = async (contentScriptName) => {
    // If there's a reply, the content script already was injected.
    try {
      return await sendMessageToPage('ping');
    } catch (err) {
      new Promise((resolve) => {
        browser.tabs.executeScript(
            {
              file: contentScriptName,
            },
            () => {
              return resolve();
            },
        );
      });
    }
  };

  const askForAllOriginsPermission = async () => {
    return new Promise((resolve, reject) => {
      browser.permissions.request(
          {
            origins: ['http://*/*', 'https://*/*'],
          },
          (granted) => {
            if (granted) {
              return resolve();
            }
            return reject(new Error('Host permission not granted.'));
          },
      );
    });
  };

  const polyfillTextFragments = async () => {
    try {
      await askForAllOriginsPermission();
      browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
        if (changeInfo.status === 'complete' && tab.status === 'complete') {
          await injectContentScript('text-fragments.js');
        }
      });
    } catch {
      // Ignore for now. Like this, users can still create links, for example,
      // for sharing, but they won't work locally.
    }
  };

  browser.contextMenus.create({
    title: browser.i18n.getMessage('copy_link'),
    id: 'copy-link',
    contexts: ['selection'],
  });

  browser.commands.onCommand.addListener(async (command) => {
    if (command === 'copy_link') {
      if (!SUPPORTS_TEXT_FRAGMENTS) {
        await polyfillTextFragments();
      }
      await injectContentScript('content_script.js');
      browser.tabs.query(
          {
            active: true,
            currentWindow: true,
          },
          (tabs) => {
            startProcessing(tabs[0]);
          },
      );
    }
  });

  browser.contextMenus.onClicked.addListener(async (info, tab) => {
    if (!SUPPORTS_TEXT_FRAGMENTS) {
      await polyfillTextFragments();
    }
    await injectContentScript('content_script.js');
    startProcessing(tab);
  });

  const startProcessing = async (tab) => {
    try {
      await sendMessageToPage('debug', DEBUG);
    } catch {
      // Ignore
    }
    const result = await createURL(tab.url);
    // This happens if no text was selected when the keyboard shortcut was used.
    if (result === '') {
      return;
    }
    if (!result) {
      try {
        await sendMessageToPage('failure');
      } catch {
        // Ignore
      }
      return log('😔 Failed to create unique link.\n\n\n');
    }
    await sendMessageToPage('copy-url', result);
    await sendMessageToPage('success', result.url);
  };

  const escapeRegExp = (s) => {
    return s.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
  };

  const unescapeRegExp = (s) => {
    return s.replace(/\\([\\^$.*+?()[\]{}|])/g, '$1');
  };

  const encodeURIComponentAndMinus = (text) => {
    return encodeURIComponent(text).replace(/-/g, '%2D');
  };

  const isUniqueMatch = (hayStack, start, end = '') => {
    try {
      const needle = new RegExp(`${start}${end}`, 'gims');
      const matches = [...hayStack.matchAll(needle)];
      log(
          '———\n',
          'RegEx: 👉' + needle.source + '👈\n',
          'Matches:',
          matches,
          '\n———',
      );
      if (matches.length === 1) {
        let matchedText = matches[0][0];
        // Find inner matches where the needle is (at least partly) contained
        // again in the haystack.
        const startNeedle = new RegExp(start, 'ims');
        const endNeedle = new RegExp(end.replace(/^\.\*\?/), 'ims');
        matchedText = matchedText
            .replace(startNeedle, '')
            .replace(endNeedle, '');
        const innerMatches = [...matchedText.matchAll(needle)];
        if (innerMatches.length === 0) {
          return true;
        }
        return false;
      } else if (matches.length === 0) {
        return null;
      }
      return false;
    } catch (err) {
      // This can happen when the regular expression can't be created.
      console.error(err.name, err.message);
      return null;
    }
  };

  const findUniqueMatch = (
      pageText,
      textStart,
      textEnd,
      unique,
      wordsBefore,
      wordsAfter,
      growthDirection,
      prefix = '',
      suffix = '',
  ) => {
    log(
        'prefix: "' +
        prefix +
        '"\n' +
        'textStart: "' +
        textStart +
        '"\n' +
        'textEnd: "' +
        textEnd +
        '"\n' +
        'suffix: "' +
        suffix +
        '"\n' +
        'growth direction: ' +
        growthDirection,
    );
    if (
      wordsAfter.length === 0 &&
      wordsBefore.length > 0 &&
      growthDirection === 'suffix'
    ) {
      // Switch the growth direction.
      growthDirection = 'prefix';
    } else if (
      wordsBefore.length === 0 &&
      wordsAfter.length === 0 &&
      unique === false
    ) {
      // No more search options.
      return {
        prefix: false,
        suffix: false,
      };
    }
    // We need to add outer context before or after the needle.
    if (growthDirection === 'prefix' && wordsBefore.length > 0) {
      const newPrefix = escapeRegExp(wordsBefore.pop());
      prefix = `${newPrefix}${prefix ? ` ${prefix}` : ''}`.trim();
      log('New prefix "' + prefix + '"');
    } else if (wordsAfter.length > 0) {
      const newSuffix = escapeRegExp(wordsAfter.shift());
      suffix = `${suffix ? `${suffix} ` : ''}${newSuffix}`.trim();
      log('New suffix "' + suffix + '"');
    }
    unique = isUniqueMatch(
        pageText,
        `${prefix ? `${prefix}(.?|\\s*)` : ''}${textStart}`,
        // eslint-disable-next-line max-len
        `${textEnd ? `.*?${textEnd}` : ''}${suffix ? `(.?|\\s*)${suffix}` : ''}`,
    );
    if (unique) {
      return {
        prefix: unescapeRegExp(prefix.trim()),
        suffix: unescapeRegExp(suffix.trim()),
      };
    } else if (unique === null) {
      // Couldn't create regular expression. This should rarely happen…
      return {
        prefix: false,
        suffix: false,
      };
    }
    return findUniqueMatch(
        pageText,
        textStart,
        textEnd,
        unique,
        wordsBefore,
        wordsAfter,
        growthDirection,
        prefix,
        suffix,
    );
  };

  const chooseSeedTextStartAndTextEnd = (selection) => {
    const selectedText = selection;
    const selectedWords = selection.split(/\s/g);
    const selectedParagraphs = selection.split(/\n+/g);
    let textStart = '';
    let textEnd = '';
    let textStartGrowthWords = [];
    let textEndGrowthWords = [];
    log('🔎 Beginning our search.', selection);
    // Reminder: `shift()`, `pop()`, and `splice()` all change the array.
    if (selectedParagraphs.length > 1) {
      log('Selection spans multiple boundaries.');
      // Use the first word of the first boundary and the last word of the last
      // boundary.
      const selectedWordsBeforeBoundary = selectedParagraphs
          .shift()
          .split(/\s/g);
      const selectedWordsAfterBoundary = selectedParagraphs.pop().split(/\s/g);
      textStart = selectedWordsBeforeBoundary.shift();
      textEnd = selectedWordsAfterBoundary.pop();
      // Add inner context at the beginning and the end.
      if (CONTEXT_MAX_WORDS > 0) {
        if (selectedWordsBeforeBoundary.length) {
          textStart +=
            ' ' +
            selectedWordsBeforeBoundary.splice(0, CONTEXT_MAX_WORDS).join(' ');
        }
        textStartGrowthWords = selectedWordsBeforeBoundary;
        if (selectedWordsAfterBoundary.length) {
          textEnd =
            selectedWordsAfterBoundary
                .splice(-1 * CONTEXT_MAX_WORDS)
                .join(' ') +
            ' ' +
            textEnd;
        }
        textEndGrowthWords = selectedWordsAfterBoundary;
      }
    } else if (
      selectedWords.length === 1 ||
      selectedText.length <= EXACT_MATCH_MAX_CHARS
    ) {
      log('Selection spans just one boundary and is short enough.');
      // Just use the entire text.
      textStart = selectedText;
    } else {
      log('Selection spans just one boundary, but is too long.');
      // Use the first and the last word of the selection.
      textStart = selectedWords.shift();
      textEnd = selectedWords.pop();
      // Add inner context at the beginning and the end.
      if (CONTEXT_MAX_WORDS > 0) {
        if (selectedWords.length) {
          textStart +=
            ' ' + selectedWords.splice(0, CONTEXT_MAX_WORDS).join(' ');
        }
        // Need to check again since `splice` changes the array.
        if (selectedWords.length) {
          textEnd =
            selectedWords.splice(-1 * CONTEXT_MAX_WORDS).join(' ') +
            ' ' +
            textEnd;
        }
        textStartGrowthWords = selectedWords;
      }
    }
    return {
      textStart: escapeRegExp(textStart.trim()),
      textEnd: escapeRegExp(textEnd.trim()),
      textStartGrowthWords,
      textEndGrowthWords,
    };
  };

  const createURL = async (tabURL) => {
    let pageResponse;
    try {
      pageResponse = await sendMessageToPage('get-text');
    } catch (err) {
      console.error(err.name, err.message);
      return false;
    }
    const {
      selectedText,
      pageText,
      textBeforeSelection,
      textAfterSelection,
      textNodeBeforeSelection,
      textNodeAfterSelection,
      closestElementFragment,
    } = pageResponse;

    if (!selectedText) {
      return '';
    }

    tabURL = new URL(tabURL);
    let textFragmentURL = `${tabURL.origin}${tabURL.pathname}${tabURL.search}${
      closestElementFragment ? `#${closestElementFragment}` : '#'
    }`;

    let {
      textStart,
      textEnd,
      textStartGrowthWords,
      textEndGrowthWords,
    } = chooseSeedTextStartAndTextEnd(selectedText);
    let unique = isUniqueMatch(
        pageText,
        textStart,
        `${textEnd ? `.*?${textEnd}` : ''}`,
    );
    if (unique) {
      // We have a unique match, return it.
      textStart = encodeURIComponentAndMinus(unescapeRegExp(textStart));
      textEnd = textEnd ?
        `,${encodeURIComponentAndMinus(unescapeRegExp(textEnd))}` :
        '';
      return {
        url: (textFragmentURL += `:~:text=${textStart}${textEnd}`),
        selectedText,
      };
    } else if (unique === null) {
      return false;
    }

    // We need to add inner context to textStart.
    if (textStartGrowthWords.length) {
      log('Growing inner context at text start');
      while (textStartGrowthWords.length) {
        const newTextStart = escapeRegExp(textStartGrowthWords.shift());
        textStart = `${textStart} ${newTextStart}`;
        log('New text start "' + textStart + '"');
        unique = isUniqueMatch(
            pageText,
            textStart,
            `${textEnd ? `.*?${textEnd}` : ''}`,
        );
        if (unique) {
          // We have a unique match, return it.
          textStart = encodeURIComponentAndMinus(unescapeRegExp(textStart));
          textEnd = textEnd ?
            `,${encodeURIComponentAndMinus(unescapeRegExp(textEnd))}` :
            '';
          return {
            url: (textFragmentURL += `:~:text=${textStart}${textEnd}`),
            selectedText,
          };
        } else if (unique === null) {
          return false;
        }
      }
    }

    // We need to add inner context to textEnd.
    if (textEndGrowthWords.length) {
      log('Growing inner context at text end');
      while (textEndGrowthWords.length) {
        const newTextEnd = escapeRegExp(textEndGrowthWords.pop());
        textEnd = `${newTextEnd} ${textEnd}`;
        log('New text end "' + textEnd + '"');
        unique = isUniqueMatch(pageText, textStart, `.*?${textEnd}`);
        if (unique) {
          // We have a unique match, return it.
          textStart = encodeURIComponentAndMinus(unescapeRegExp(textStart));
          textEnd = encodeURIComponentAndMinus(unescapeRegExp(textEnd));
          return {
            url: (textFragmentURL += `:~:text=${textStart}${textEnd}`),
            selectedText,
          };
        } else if (unique === null) {
          return false;
        }
      }
    }

    // We need to add outer context. Therefore, use the text before/after in the
    // same node as the selected text, or if there's none, the text in
    // the previous/next node.
    const wordsInTextNodeBeforeSelection = textNodeBeforeSelection ?
      textNodeBeforeSelection.split(/\s/g) :
      [];
    const wordsBeforeSelection = textBeforeSelection ?
      textBeforeSelection.split(/\s/g) :
      [];
    const wordsBefore = wordsBeforeSelection.length ?
      wordsBeforeSelection :
      wordsInTextNodeBeforeSelection;

    const wordsInTextNodeAfterSelection = textNodeAfterSelection ?
      textNodeAfterSelection.split(/\s/g) :
      [];
    const wordsAfterSelection = textAfterSelection ?
      textAfterSelection.split(/\s/g) :
      [];
    const wordsAfter = wordsAfterSelection.length ?
      wordsAfterSelection :
      wordsInTextNodeAfterSelection;

    // Add context either before or after the selected text, depending on
    // where there is more text.
    const growthDirection =
      wordsBefore.length > wordsAfter.length ? 'prefix' : 'suffix';

    let {prefix, suffix} = findUniqueMatch(
        pageText,
        textStart,
        textEnd,
        unique,
        wordsBefore,
        wordsAfter,
        growthDirection,
    );
    if (!prefix && !suffix) {
      return false;
    }
    prefix = prefix ?
      `${encodeURIComponentAndMinus(unescapeRegExp(prefix))}-,` :
      '';
    suffix = suffix ?
      `,-${encodeURIComponentAndMinus(unescapeRegExp(suffix))}` :
      '';
    textStart = encodeURIComponentAndMinus(unescapeRegExp(textStart));
    textEnd = textEnd ?
      `,${encodeURIComponentAndMinus(unescapeRegExp(textEnd))}` :
      '';
    textFragmentURL += `:~:text=${prefix}${textStart}${textEnd}${suffix}`;
    return {
      url: textFragmentURL,
      selectedText,
    };
  };

  const sendMessageToPage = (message, data = null) => {
    return new Promise((resolve, reject) => {
      browser.tabs.query(
          {
            active: true,
            currentWindow: true,
          },
          (tabs) => {
            browser.tabs.sendMessage(
                tabs[0].id,
                {
                  message,
                  data,
                },
                (response) => {
                  if (!response) {
                    return reject(
                        new Error('Failed to connect to the specified tab.'),
                    );
                  }
                  return resolve(response);
                },
            );
          },
      );
    });
  };
  // eslint-disable-next-line no-undef
})(chrome || browser);
