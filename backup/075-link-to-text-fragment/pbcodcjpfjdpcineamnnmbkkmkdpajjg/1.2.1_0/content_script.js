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
((browser) => {
  let DEBUG = false;

  const log = (...args) => {
    if (DEBUG) {
      console.log(...args);
    }
  };

  // Credits: https://stackoverflow.com/a/7381574/6255000
  const snapSelectionToWord = (sel) => {
    if (!sel.isCollapsed) {
      // Detect if selection is backwards
      const range = document.createRange();
      range.setStart(sel.anchorNode, sel.anchorOffset);
      range.setEnd(sel.focusNode, sel.focusOffset);
      const direction = range.collapsed ?
        ['backward', 'forward'] :
        ['forward', 'backward'];
      range.detach();

      // modify() works on the focus of the selection
      const endNode = sel.focusNode;
      const endOffset = sel.focusOffset;
      sel.collapse(sel.anchorNode, sel.anchorOffset);
      sel.modify('move', direction[0], 'character');
      sel.modify('move', direction[1], 'word');
      sel.extend(endNode, endOffset);
      sel.modify('extend', direction[1], 'character');
      sel.modify('extend', direction[0], 'word');
    }
    return sel.toString().trim();
  };

  const getPreviousNode = (anchorNode) => {
    let seenAnchorNode = false;
    const treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            if (node.isSameNode(anchorNode)) {
              seenAnchorNode = true;
              return NodeFilter.FILTER_SKIP;
            }
            if (seenAnchorNode) {
              return NodeFilter.FILTER_SKIP;
            }
            return node.parentNode.offsetParent &&
            node.nodeValue.replace(/\s/g, '') ?
            NodeFilter.FILTER_ACCEPT :
            NodeFilter.FILTER_SKIP;
          },
        },
    );
    let previousNode = null;
    let currentNode = null;
    while ((currentNode = treeWalker.nextNode())) {
      previousNode = currentNode;
    }
    return previousNode;
  };

  const getNextNode = (focusNode) => {
    let seenFocusNode = false;
    const treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            if (node.isSameNode(focusNode)) {
              seenFocusNode = true;
              return NodeFilter.FILTER_SKIP;
            }
            if (!seenFocusNode) {
              return NodeFilter.FILTER_SKIP;
            }
            return node.parentNode.offsetParent &&
            node.nodeValue.replace(/\s/g, '') ?
            NodeFilter.FILTER_ACCEPT :
            NodeFilter.FILTER_SKIP;
          },
        },
    );
    return treeWalker.nextNode();
  };

  const getClosestID = (root) => {
    if (root.id) {
      return root.id;
    }
    let seenRoot = false;
    const treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_ELEMENT,
        {
          acceptNode: (node) => {
            if (node.isSameNode(root)) {
              seenRoot = true;
            }
            return node.offsetParent && node.hasAttribute('id') && !seenRoot ?
            NodeFilter.FILTER_ACCEPT :
            NodeFilter.FILTER_SKIP;
          },
        },
    );
    let nodeWithID = null;
    let currentNode = null;
    while ((currentNode = treeWalker.nextNode())) {
      nodeWithID = currentNode;
    }
    return nodeWithID ? nodeWithID.id : null;
  };

  const cleanText = (text) => {
    // Replace &nbsp; with regular space.
    return text.replace(/\u00A0/g, ' ');
  };

  const getText = (sendResponse) => {
    const selection = window.getSelection();
    const selectedText = snapSelectionToWord(selection);
    let {anchorNode, anchorOffset, focusNode, focusOffset} = selection;
    // If the selection is backward across nodes, swap the nodes.
    if (
      anchorNode.compareDocumentPosition(focusNode) ===
      Node.DOCUMENT_POSITION_PRECEDING
    ) {
      [anchorNode, focusNode] = [focusNode, anchorNode];
      [anchorOffset, focusOffset] = [focusOffset, anchorOffset];
    }
    const pageText = document.body.innerText.trim();
    const textBeforeSelection = anchorNode.textContent
        .substr(0, anchorOffset)
        .trim();
    const textAfterSelection = focusNode.textContent.substr(focusOffset).trim();
    const closestElementFragment = getClosestID(anchorNode.parentNode);
    const previousNode = getPreviousNode(anchorNode);
    const nextNode = getNextNode(focusNode);
    const textNodeBeforeSelection = previousNode ?
      previousNode.nodeType === 3 ?
        previousNode.nodeValue :
        previousNode.innerText :
      '';
    const textNodeAfterSelection = nextNode ?
      nextNode.nodeType === 3 ?
        nextNode.nodeValue :
        nextNode.innerText :
      '';
    const data = {
      selectedText: cleanText(selectedText),
      pageText: cleanText(pageText),
      textBeforeSelection: cleanText(textBeforeSelection),
      textAfterSelection: cleanText(textAfterSelection),
      textNodeBeforeSelection: cleanText(textNodeBeforeSelection),
      textNodeAfterSelection: cleanText(textNodeAfterSelection),
      closestElementFragment,
    };
    log(data);
    return data;
  };

  const reportSuccess = (url) => {
    log(url);
    const style = document.createElement('style');
    document.head.append(style);
    const sheet = style.sheet;
    sheet.insertRule(`
      ::selection {
        color: #000 !important;
        background-color: #ffff00 !important;
      }`);
    // Need to force re-selection for the CSS to have an effect in Safari.
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    selection.removeAllRanges();
    window.setTimeout(() => selection.addRange(range), 0);
    window.setTimeout(() => style.remove(), 2000);
    return true;
  };

  const reportFailure = () => {
    window.queueMicrotask(() => {
      alert(
          `🛑 ${browser.i18n.getMessage(
              'extension_name',
          )}:\n${browser.i18n.getMessage('link_failure')}`,
      );
    });
    return true;
  };

  const copyToClipboard = async (result) => {
    const {url, selectedText} = result;
    // Try to use the Async Clipboard API with fallback to the legacy approach.
    try {
      const {state} = await navigator.permissions.query({
        name: 'clipboard-write',
      });
      if (state !== 'granted') {
        throw new Error('Clipboard permission not granted');
      }
      const clipboardData = [
        new ClipboardItem({
          'text/plain': new Blob([url], {type: 'text/plain'}),
          'text/html': new Blob([`<a href="${url}">${selectedText}</a>`], {
            type: 'text/html',
          }),
          /* // ToDo: Activate once supported.
          'text/rtf': new Blob(
            [

              `{\field{\*\fldinst HYPERLINK "${url}"}{\fldrslt ${
                  selectedText}}}`,
            ],
            { type: 'text/rtf' }
          ),
          */
        }),
      ];
      /* global ClipboardItem */
      await navigator.clipboard.write(clipboardData);
    } catch (err) {
      console.warn(err.name, err.message);
      const textArea = document.createElement('textarea');
      document.body.append(textArea);
      textArea.textContent = url;
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
    }
    log('🎉', url, '\n\n\n');
    return true;
  };

  browser.runtime.onMessage.addListener((request, _, sendResponse) => {
    const message = request.message;
    if (message === 'get-text') {
      return sendResponse(getText());
    } else if (message === 'success') {
      return sendResponse(reportSuccess(request.data));
    } else if (message === 'copy-url') {
      return sendResponse(copyToClipboard(request.data));
    } else if (message === 'failure') {
      return sendResponse(reportFailure());
    } else if (message === 'debug') {
      return sendResponse((DEBUG = request.data) || true);
    } else if (message === 'ping') {
      return sendResponse('pong');
    }
  });
  // eslint-disable-next-line no-undef
})(chrome || browser);
