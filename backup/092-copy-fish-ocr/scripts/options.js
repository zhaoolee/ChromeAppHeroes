window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

$(function () {
  var configSetting = {};
  $.ajaxSetup({ cache: false });
  'use strict';
  let engine, OPTIONS;
  function getScreenshotVersion() {
    createNMPromise("getVersion").
    then(result => {
      $('.status-box.xmodule-span span:first-of-type').text(`Installed (${result.version})`).css({ color: "#008000" });
      $('.status-box.xmodule-span a:first-of-type').text('Check for update');
    });
  }
  function testScreenshot() {
    createNMPromise("testScreenshot").
    then(result => {
      var resultText = $('.status-box.xmodule-span span:nth-of-type(2)');
      var enableLink = $('.status-box.xmodule-span a:nth-of-type(2)');
      var shutterText = $('#xmodule-shutter');
      if (result.result) {
        resultText.text('Enabled').css({ color: "#008000", opacity: 0 }).animate({ opacity: 1 }, 1000);
        enableLink.css({ display: "none" });
        shutterText.css({ display: "" });
      }
      else {
        resultText.text('Disabled').css({ color: "red", opacity: 0 }).animate({ opacity: 1 }, 1000);
        if (result.error === 'shutter') {
          enableLink.css({ display: "none" });
          shutterText.css({ display: "initial" });
        }
        else {
          enableLink.css({ display: "" });
          shutterText.css({ display: "" });
        }
      }
    }).
    catch(() => {
      $('.status-box.xmodule-span span:nth-of-type(2)').text('Disabled').css({ color: "red", opacity: 0 }).animate({ opacity: 1 }, 1000);
      $('.status-box.xmodule-span a:nth-of-type(2)').css({ display: "none" });
    });
  }
  $.getJSON(browser.extension.getURL('config/config.json'))
    .done(function (appConfig) {
      var suppressSaves;
      var defaults = appConfig.defaults;
      var ocrnameArray = appConfig.ocr_languages;
      var statusTimeout;

      var checkBoxes = {
        visualCopyAutoTranslate: [ '.auto-translate', defaults.visualCopyAutoTranslate ],
        visualCopySupportDicts: [ '.popup-dicts', defaults.visualCopySupportDicts ],
        copyAfterProcess: [ '.copy-auto', defaults.copyAfterProcess ],
        visualCopyTextOverlay: [ '.text-overlay', defaults.visualCopyTextOverlay ]
      };


      //free plan
      $('.show_status').each(function (index, el) {
        $(this).text(defaults.status);
      });

      var setChromeSyncStorage = function (obj) {
        browser.storage.sync.set(obj, function () {
          // Update status to let user know options were saved.
          $('.status-text').addClass('visible');
          clearTimeout(statusTimeout);
          statusTimeout = setTimeout(function () {
            $('.status-text').removeClass('visible');
          }, 5000);
        });
      };
      // // render the Input Language select box
      // var htmlStrArr = $(ocrnameArray).map(function (i, val) {
      // 	return '<option value="' + val.lang + '">' + val.name + '</option>';
      // });
      //
      //
      //
      // $('#input-lang').html(htmlStrArr.toArray().join(' '));
      // htmlStrArr.splice(0, htmlStrArr.length);
      //
      // // render the quick select checkboxes
      // htmlStrArr = $(ocrnameArray).map(function (i, val) {
      // 	return '<option value="' + val.lang + '" data-shhort="' + val.short + '">' + val.name + '-' + val.short + '</option>';
      // });
      // $('.lang-quickselect').each(function (i, node) {
      // 	$(node).append(htmlStrArr.toArray().join(' '));
      // });
      // htmlStrArr.splice(0, htmlStrArr.length);

      // fetch options while defaulting them when unavailable
      browser.storage.sync.get({
        visualCopyOCRLang: defaults.visualCopyOCRLang,
        visualCopyTranslateLang: defaults.visualCopyTranslateLang,
        visualCopyAutoTranslate: defaults.visualCopyAutoTranslate,
        visualCopyOCRFontSize: defaults.visualCopyOCRFontSize,
        visualCopySupportDicts: defaults.visualCopySupportDicts,
        copyAfterProcess: defaults.copyAfterProcess,
        copyType: defaults.copyType,
        visualCopyQuickSelectLangs: defaults.visualCopyQuickSelectLangs,
        visualCopyTextOverlay: 1, // make it default always on defaults.visualCopyTextOverlay,
        openGrabbingScreenHotkey: defaults.openGrabbingScreenHotkey,
        closePanelHotkey: defaults.closePanelHotkey,
        copyTextHotkey: defaults.copyTextHotkey,
        ocrEngine: defaults.ocrEngine,
        transitionEngine: defaults.transitionEngine,
        status: defaults.status,
      }, function (items) {
        items.visualCopyTextOverlay = 1;
        OPTIONS = items;
        console.log('settings', items);
        //pro status

        engine = items.ocrEngine;
        if (items.ocrEngine === "OcrSpaceSecond") $('#OcrSpaceSecond').click();
        if (items.status === 'PRO') {
          $('.show_status').each(function (index, el) {
            $(this).text(items.status);
          });
          $('#OcrGoogle').removeAttr('disabled').parents().removeClass('is-disabled');
          $(".upgrade_status").show();
        } else if (items.status === 'PRO+') {

          $('.show_status').each(function (index, el) {
            $(this).text(items.status);
          });
          $(".upgrade_status").hide(); 
          $('#copy_translation').removeAttr('disabled').parents().removeClass('is-disabled');
          $('#copy_both').removeAttr('disabled').parents().removeClass('is-disabled');
          $('#OcrGoogle').removeAttr('disabled').parents().removeClass('is-disabled');
          $('#YandexTranslator').removeAttr('disabled').parents().removeClass('is-disabled');
          $('#GoogleTranslator').removeAttr('disabled').parents().removeClass('is-disabled');
          $('#DeepTranslator').removeAttr('disabled').parents().removeClass('is-disabled');
          $('#switch-auto-translate').removeAttr('disabled').parents().removeClass('is-disabled');
        } else if (items.status === 'Free Plan') {
          const $OcrSpace = $('#OcrSpace');
          if (!$OcrSpace.attr('checked')) {
            items.ocrEngine === "OcrSpaceSecond" ? $('#OcrSpaceSecond').click() : $('#OcrSpace').click();
            setTimeout(() => {
              $('.status-text').removeClass('visible');
            }, 100)
          }
          $(".upgrade_status").show();

        } else if (items.status === 'Subscription expired') {
          $(".upgrade_status").show();
          const $OcrSpace = $('#OcrSpace');
          if (!$OcrSpace.attr('checked')) {
            items.ocrEngine === "OcrSpaceSecond" ? $('#OcrSpaceSecond').click() : $('#OcrSpace').click();
            setTimeout(() => {
              $('.status-text').removeClass('visible');
            }, 100)
          }
          $('.show_status').each(function (index, el) {
            $(this).text(items.status);
          });
        }
        //radio buttons values
        $(`#${items.ocrEngine}`).attr('checked', 'checked').parent().addClass('is-checked');

        //copy options
        $(`.copy-options[value=${items.copyType}]`).attr('checked', 'checked').closest('label').addClass('is-checked');

        if (!items.copyAfterProcess) $('.copy-options').each((i, el) => $(el).prop('disabled', true).closest('label').addClass('is-disabled'));

        //get  translationEngine value   in chrome storage and check it
        $(`#${items.transitionEngine}`).attr('checked', 'checked').parent().addClass('is-checked');

        if (items.transitionEngine == "GoogleTranslator") {
          //render translate api language
          var translateArray = appConfig.google_languages;
          var translateLangArray = $(translateArray).map(function (i, val) {
            let langCode = Object.keys(val)[ 0 ];

            return '<option value="' + langCode + '">' + val[ langCode ] + '</option>';
          });

          $('#output-lang').html(translateLangArray.toArray().join(' '));

        } else if (items.transitionEngine == "DeepTranslator") {
          //render translate api language
          var translateArray = appConfig.deepapi_languages;
          var translateLangArray = $(translateArray).map(function (i, val) {
            let langCode = Object.keys(val)[ 0 ];

            return '<option value="' + langCode + '">' + val[ langCode ] + '</option>';
          });

          $('#output-lang').html(translateLangArray.toArray().join(' '));

        } else if (items.transitionEngine == "YandexTranslator") {

          //render translate api language
          var translateArray = appConfig.yandex_languages;
          var translateLangArray = $(translateArray).map(function (i, val) {
            let langCode = Object.keys(val)[ 0 ];

            return '<option value="' + langCode + '">' + val[ langCode ] + '</option>';
          });

          $('#output-lang').html(translateLangArray.toArray().join(' '));
        }
        if (items.ocrEngine == "OcrGoogle") {

          var ocrnameArray = appConfig.ocr_google_languages;
          // render the Input Language select box
          var htmlStrArr = $(ocrnameArray).map(function (i, val) {
            return '<option value="' + val.lang + '">' + val.name + '</option>';
          });

          $('#input-lang').html(htmlStrArr.toArray().join(' '));
          htmlStrArr.splice(0, htmlStrArr.length);

          // render the quick select checkboxes
          htmlStrArr = $(ocrnameArray).map(function (i, val) {
            return '<option value="' + val.lang + '" data-short="' + val.short + '">' + val.name + '-' + val.short + '</option>';
          });
          $('.lang-quickselect').each(function (i, node) {
            $(node).append(htmlStrArr.toArray().join(' '));
          });
          htmlStrArr.splice(0, htmlStrArr.length);
        } else if (items.ocrEngine == "OcrSpace") {

          //render translate api language
          var translateArray = appConfig.yandex_languages;
          var translateLangArray = $(translateArray).map(function (i, val) {
            let langCode = Object.keys(val)[ 0 ];

            return '<option value="' + langCode + '">' + val[ langCode ] + '</option>';
          });

          $('#output-lang').html(translateLangArray.toArray().join(' '));


          var ocrnameArray = appConfig.ocr_languages;
          // render the Input Language select box
          var htmlStrArr = $(ocrnameArray).map(function (i, val) {
            return '<option value="' + val.lang + '">' + val.name + '</option>';
          });

          $('#input-lang').html(htmlStrArr.toArray().join(' '));
          htmlStrArr.splice(0, htmlStrArr.length);
          // render the quick select checkboxes
          htmlStrArr = $(ocrnameArray).map(function (i, val) {
            return '<option value="' + val.lang + '" data-short="' + val.short + '">' + val.name + '-' + val.short + '</option>';
          });
          $('.lang-quickselect').each(function (i, node) {
            $(node).append(htmlStrArr.toArray().join(' '));
          });
          htmlStrArr.splice(0, htmlStrArr.length);
        }

        // don't persist any triggered changes
        suppressSaves = true;

        if (items.ocrEngine === "OcrSpace") {
          $('#input-lang').val(items.visualCopyOCRLang);
        }

        $('#output-lang').val(items.visualCopyTranslateLang);
        $('#ocr-fontsize').val(items.visualCopyOCRFontSize);
        /*set checkbox state(s)*/
        $.each(checkBoxes, function (key, value) {
          console.log(items[ key ], value[ 0 ], 123123)
          if ((!items[ key ] && $(value[ 0 ]).hasClass('is-checked')) ||
            (items[ key ] && !$(value[ 0 ]).hasClass('is-checked'))) {
            $('#switch-' + value[ 0 ].substr(1)).click();
          }
          disabledTrnslationBlock();
        });
        if (!items.visualCopyQuickSelectLangs.length) {
          $('.lang-quickselect').each(function (i, node) {
            $(node).val('none');
          });
        } else {
          $.each(items.visualCopyQuickSelectLangs, function (i, language) {
            $('#input-lang-' + (i + 1)).val(language);
          });
        }
        // hotkey
        $('#openHotkey').val(items.openGrabbingScreenHotkey);
        $('#closeHotkey').val(items.closePanelHotkey);
        $('#copyHotkey').val(items.copyTextHotkey);
        suppressSaves = false;
      });


      $('body')
        .on('change', function (e) {
          var $target = $(e.target);
          var quickSelectLangs = [];
          if (suppressSaves) {
            return true;
          }
          if ($target.is('#input-lang')) {
            setChromeSyncStorage({
              visualCopyOCRLang: $('#input-lang').val()
            });
          } else if ($target.is('#output-lang')) {
            setChromeSyncStorage({
              visualCopyTranslateLang: $target.val()
            });
          } else if ($target.is('#ocr-fontsize')) {
            setChromeSyncStorage({
              visualCopyOCRFontSize: $target.val()
            });
          } else if ($target.is('#output-lang')) {
            setChromeSyncStorage({
              visualCopyOCRLang: $target.val()
            });
          } else if ($target.is('#switch-auto-translate')) {
            disabledTrnslationBlock();
            setChromeSyncStorage({
              visualCopyAutoTranslate: $target.parent().hasClass('is-checked')
            });
          } else if ($target.is('#switch-popup-dicts')) {
            setChromeSyncStorage({
              visualCopySupportDicts: $target.parent().hasClass('is-checked')
            });
          } else if ($target.is('#switch-copy-auto')) {
            let optionStatus = $target.parent().hasClass('is-checked')
            if (!optionStatus) $('.copy-options').each((i, el) => $(el).prop('disabled', true).closest('label').addClass('is-disabled'))
            else if (OPTIONS.status !== "PRO+") $('#copy_text').prop('disabled', false).closest('label').removeClass('is-disabled')
            else $('.copy-options').each((i, el) => $(el).prop('disabled', false).closest('label').removeClass('is-disabled'))

            setChromeSyncStorage({
              copyAfterProcess: optionStatus
            });
          } else if ($target.is('.copy-options')) {
            setChromeSyncStorage({
              copyType: $target.val()
            });
          } else if ($target.is('#switch-text-overlay')) {
            setChromeSyncStorage({
              visualCopyTextOverlay: $target.parent().hasClass('is-checked')
            });
          } else if ($target.is('.lang-quickselect')) {
            $('.lang-quickselect').each(function (i, node) {
              quickSelectLangs.push($(node).val());
            });
            setChromeSyncStorage({
              visualCopyQuickSelectLangs: quickSelectLangs
            });
          } else if ($target.is("#openHotkey")) {
            setChromeSyncStorage({
              openGrabbingScreenHotkey: +$target.val()
            });
          } else if ($target.is("#closeHotkey")) {
            setChromeSyncStorage({
              closePanelHotkey: +$target.val()
            });
          } else if ($target.is("#copyHotkey")) {
            setChromeSyncStorage({
              copyTextHotkey: +$target.val()
            });
          } else if ($target.is("#OcrSpace")) {

            var ocrnameArray = appConfig.ocr_languages;
            $('.second-engine-text').remove();
            $('.input-language,.input-language-quickselect').removeClass('disabled-background')
            // render the Input Language select box
            var htmlStrArr = $(ocrnameArray).map(function (i, val) {
              return '<option value="' + val.lang + '">' + val.name + '</option>';
            });

            $('#input-lang').prop('disabled', false).html(htmlStrArr.toArray().join(' '));
            htmlStrArr.splice(0, htmlStrArr.length);

            // render the quick select checkboxes
            htmlStrArr = $(ocrnameArray).map(function (i, val) {
              return '<option value="' + val.lang + '" data-short="' + val.short + '">' + val.name + '-' + val.short + '</option>';
            });

            $('.lang-quickselect').each(function (i, node) {
              $(node).children('option').not(':first').remove();
              $(node).append(htmlStrArr.toArray().join(' '));
            });

            htmlStrArr.splice(0, htmlStrArr.length);
            // reset Input Language Quickselect if OcrIsChanged
            if (engine !== "OcrSpaceSecond") {
              setChromeSyncStorage({
                ocrEngine: $target.val(),
                visualCopyOCRLang: "eng",
                visualCopyQuickSelectLangs: [ "none", "none", "none" ]
              });
            } else {
              setChromeSyncStorage({
                ocrEngine: $target.val()
              })

              browser.storage.sync.get([ 'visualCopyOCRLang', 'visualCopyQuickSelectLangs' ], function ({ visualCopyOCRLang, visualCopyQuickSelectLangs }) {
                $('#input-lang').val(visualCopyOCRLang);

                visualCopyQuickSelectLangs.map((lng, index) => {
                  $('.lang-quickselect').eq(index).val(lng)
                });

              });
            }

            // reset Input Language Quickselect if OcrIsChanged
            $('.lang-quickselect').each(function (i, node) {
              $(node).val('none');
            }).prop('disabled', false);

          } else if ($target.is("#OcrSpaceSecond")) {

            $('#input-lang').text('');
            $('#input-lang').after("<span class='second-engine-text' style='color: #b1b1b1;position: absolute;margin-left: -390px;margin-top: 2px'>Autodetect Latin Characters</span>").prop('disabled', false);
            $('.lang-quickselect').each(function (i, node) {
              $(node).val('none');
            }).prop('disabled', true);

            $('.input-language,.input-language-quickselect').addClass('disabled-background')

            engine = 'OcrSpaceSecond';

            setChromeSyncStorage({
              ocrEngine: $target.val()
            });
          } else if ($target.is("#OcrGoogle")) {
            setChromeSyncStorage({
              ocrEngine: $target.val()
            });
            $('.second-engine-text').remove();
            $('.input-language,.input-language-quickselect').removeClass('disabled-background')
            //render translate api language
            engine = 'OcrGoogle';
            var translateArray = appConfig.google_languages;
            var translateLangArray = $(translateArray).map(function (i, val) {
              let langCode = Object.keys(val)[ 0 ];

              return '<option value="' + langCode + '">' + val[ langCode ] + '</option>';
            });
            setChromeSyncStorage({
              visualCopyTranslateLang: 'en'
            });

            $('#output-lang').html(translateLangArray.toArray().join(' '));
            var ocrnameArray = appConfig.ocr_google_languages;

            // render the Input Language select box
            var htmlStrArr = $(ocrnameArray).map(function (i, val) {
              return '<option value="' + val.lang + '">' + val.name + '</option>';
            });

            $('#input-lang').prop('disabled', false).html(htmlStrArr.toArray().join(' '));
            htmlStrArr.splice(0, htmlStrArr.length);

            // render the quick select checkboxes
            htmlStrArr = $(ocrnameArray).map(function (i, val) {
              return '<option value="' + val.lang + '" data-short="' + val.short + '">' + val.name + '-' + val.short + '</option>';
            });
            $('.lang-quickselect').each(function (i, node) {
              $(node).children('option').not(':first').remove();
              $(node).append(htmlStrArr.toArray().join(' '));
            }).prop('disabled', false);
            htmlStrArr.splice(0, htmlStrArr.length);

            // reset Input Language Quickselect if OcrIsChanged
            setChromeSyncStorage({
              visualCopyOCRLang: "avto",
              visualCopyQuickSelectLangs: [ "none", "none", "none" ]
            });
            // reset Input Language Quickselect if OcrIsChanged
            $('.lang-quickselect').each(function (i, node) {
              $(node).val('none');
            });
          } else if ($target.is("#YandexTranslator")) {
            setChromeSyncStorage({
              transitionEngine: $target.val()
            });

            //render translate api language
            var translateArray = appConfig.yandex_languages;
            var translateLangArray = $(translateArray).map(function (i, val) {
              let langCode = Object.keys(val)[ 0 ];

              return '<option value="' + langCode + '">' + val[ langCode ] + '</option>';
            });

            $('#output-lang').html(translateLangArray.toArray().join(' '));
            setChromeSyncStorage({
              visualCopyTranslateLang: 'en'
            });

          } else if ($target.is("#GoogleTranslator")) {
            setChromeSyncStorage({
              transitionEngine: $target.val()
            });

            //render translate api language
            let alreadySetLang = $("#output-lang").val();
            let setLanguageCode = 'en';
            var translateArray = appConfig.google_languages;
            var translateLangArray = $(translateArray).map(function (i, val) {
              let langCode = Object.keys(val)[ 0 ];
              return '<option ' + (alreadySetLang && alreadySetLang == langCode && (setLanguageCode = langCode) && 'selected' || '') + ' value="' + langCode + '">' + val[ langCode ] + '</option>';
            });

            $('#output-lang').html(translateLangArray.toArray().join(' '));
            setChromeSyncStorage({
              visualCopyTranslateLang: setLanguageCode
            });

          } else if ($target.is("#DeepTranslator")) {
            setChromeSyncStorage({
              transitionEngine: $target.val()
            });

            //render translate api language
            let alreadySetLang = $("#output-lang").val();
            let setLanguageCode = 'en';
            var translateArray = appConfig.deepapi_languages;
            var translateLangArray = $(translateArray).map(function (i, val) {
              let langCode = Object.keys(val)[ 0 ];
              return '<option ' + (alreadySetLang && alreadySetLang == langCode && (setLanguageCode = langCode) && 'selected' || '') + ' value="' + langCode + '">' + val[ langCode ] + '</option>';
            });

            $('#output-lang').html(translateLangArray.toArray().join(' '));
            setChromeSyncStorage({
              visualCopyTranslateLang: setLanguageCode
            });
          }
        })
        /*.on('click', '.btn-save', function() {
            var quickSelectLangs = [];
            $('.lang-quickselect').each(function(i, node) {
                var $node = $(node);
                quickSelectLangs.push($node.val());
            });
            browser.storage.sync.set({
                visualCopyOCRLang: $('#input-lang').val(),
                visualCopyTranslateLang: $('#output-lang').val(),
                visualCopyOCRFontSize: $('#ocr-fontsize').val(),
                visualCopyAutoTranslate: $('.auto-translate').hasClass('is-checked'),
                visualCopySupportDicts: $('.popup-dicts').hasClass('is-checked'),
                visualCopyQuickSelectLangs: quickSelectLangs,
                visualCopyTextOverlay: $('.text-overlay').hasClass('is-checked')
            }, function() {
                // Update status to let user know options were saved.
                $('.status-text').addClass('visible');
                setTimeout(function() {
                    $('.status-text').removeClass('visible');
                }, 5000);
            });
        })*/
        .on('click', '.btn-reset', function () {
          $('#input-lang').val(defaults.visualCopyOCRLang);
          $('#output-lang').val(defaults.visualCopyTranslateLang);
          $('#ocr-fontsize').val(defaults.visualCopyOCRFontSize);
          $.each(checkBoxes, function (key, value) {
            if ((!value[ 1 ] && $(value[ 0 ]).hasClass('is-checked')) ||
              (value[ 1 ] && !$(value[ 0 ]).hasClass('is-checked'))) {
              $('#switch-' + value[ 0 ].substr(1)).click();
            }
          });

          $('.lang-quickselect').each(function (i, node) {
            $(node).val('none');
          });
        })
        .on('submit', 'form[name=mc-embedded-subscribe-form]', function (e) {
          var $this = $(this);
          var url = $this.attr('action') + "&" + $this.serialize();
          window.open(url);
          e.preventDefault();
        });
    });

  function disabledTrnslationBlock() {
    let enable = $('#switch-auto-translate').parent().hasClass('is-checked');
    if (enable) {
      $("#translation-block").removeClass('disabled-trans-block');
      $("#output-lang").removeAttr('disabled').closest('label').removeClass('is-disabled');
      $("#GoogleTranslator").removeAttr('disabled').closest('label').removeClass('is-disabled');
      $("#DeepTranslator").removeAttr('disabled').closest('label').removeClass('is-disabled');
    } else {
      $("#translation-block").addClass('disabled-trans-block');
      $("#output-lang").prop('disabled', true).closest('label').addClass('is-disabled');
      $("#GoogleTranslator").prop('disabled', true).closest('label').addClass('is-disabled');
      $("#DeepTranslator").prop('disabled', true).closest('label').addClass('is-disabled');
    }
  }
  // check file access status
  browser.storage.sync.get([ 'fileAccessStatus' ], function (result) {
    const fileAccessStatus = result.fileAccessStatus;

    if (fileAccessStatus) {
      $('.file-access-status-done').css('display', 'block');
    } else if (!fileAccessStatus) {
      $('.file-access-status-error').css('display', 'block');
    }
  });
  //key checker
  $('.keyChecker_btn').click(function (event) {
    checkKey($('.keyChecker_input').val().toLowerCase());
  });

  //get xmodule version
  getScreenshotVersion();
  testScreenshot();
  browser.runtime.sendMessage({ evt: "fileaccessGetVersion" });
  browser.runtime.sendMessage({ evt: "fileaccessTest" });

  browser.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

      if (request.evt === "fileaccess_module_version") {
        console.log(request.version)
        if (request.version) {
          $('.status-box.fileaccess_module-span span:first-of-type').text(`Installed (${request.version})`).css({ color: "#008000" });
          $('.status-box.fileaccess_module-span a').text('Check for update');
        }
      } else if (request.evt === "fileaccess_module_test") {
        if (request.result) {
          $('.status-box.fileaccess_module-span span:nth-of-type(2)').text('Enabled').css({ color: "#008000", opacity: 0 }).
            animate({ opacity: 1 }, 1000);
        }
        else {
          $('.status-box.fileaccess_module-span span:nth-of-type(2)').text('Disabled').css({ color: "red", opacity: 0 }).
            animate({ opacity: 1 }, 1000);
        }
      } else if (request.evt === "not_installed") {

        alert(`status updated: not Installed`)

      } else if (request.message === 'showXmoduleOption') {
        let $target = $('#xmodule-item');
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top - $(window).height() / 3
        }, 500, 'swing', function () {
          // lets add a div in the background
          $target.css({ border: '0 solid #ff0000' }).animate({
            borderWidth: 3
          }, 1200, function () {
            $target.animate({
              borderWidth: 0
            }, 600);
          });

        });
      } else if (request.message === 'reloadPage') {

        location.reload()
      }

    });

  $('#check-update-xmodule').click(() =>
    $('.status-box.xmodule-span span:nth-of-type(2)').text('Testing...').delay(500).queue(next => {
      testScreenshot();
      next();
    })
  );

  $('.status-box.xmodule-span a:nth-of-type(2)').click(e => {
    e.preventDefault();
    createNMPromise("enableScreenshot");
  });

  $('#check-update-fileaccess').click(() => {
    $('.status-box.fileaccess_module-span span:nth-of-type(2)').text('Testing...').delay(500).
    queue(next =>  {
      browser.runtime.sendMessage({ evt: "fileaccessTest" });
      next();
    });
  });
  const multipleKeySchema =
  {
    validKeyFound: false,
    urlSchema: [
      {
        url: 'https://license1.ocr.space/api/status?licensekey=',
        legacy: false
      },
      {
        url: 'https://ui.vision/xcopyfish/',
        legacy: true
      }
    ]
  };
  function checkKey(keyData, singleEntity = multipleKeySchema.urlSchema[ 0 ], iteration = 0) {
    try {
      checkLicenseKey(keyData, singleEntity.url, singleEntity.legacy).done(function (result) {
        iteration++;
      //  console.log('first here');
      }).fail(function (err) {
      //    console.log(err, iteration);
        iteration++;
        // if error found and we have any entity left to verify then check..
        if (iteration < multipleKeySchema.urlSchema.length) {
          // clear old message and make space for other messages ...
          $('#status_msg').text("");
          checkKey(keyData, multipleKeySchema.urlSchema[ iteration ], iteration);
        }
      });
    } catch (err) {

    }
  }

  function checkLicenseKey(keyData, urlApi = 'https://ui.vision/xcopyfish/', legacy = true) {
    // const urlApi = 'https://ui.vision/xcopyfish/';
    let $dfd = $.Deferred();
    let key = keyData;
    let keyChar = key.substr(1, 9);
    if (key.length === 20) {
      if (key.charAt(1) === 'p') {
        $.get(legacy ? urlApi + keyChar + ".json" : urlApi + key.toUpperCase(), function (data, status, xhr) {
          if (xhr.status == 200) {
            const ifSuccessRes = function (key) {
              browser.storage.sync.set({ "key": key });
              browser.runtime.sendMessage({ evt: "checkKey" });
              if ($('.show_status').text() === 'PROPRO') {
                $('#status_msg').text("PRO plan already activated");
                setTimeout(function () {
                  $('#status_msg').text("");
                }, 3000);
              } else {
                $('.show_status').each(function (index, el) {
                  $(this).text('PRO');
                });

                $('.copy-options:not(#copy_text)').each((i, el) => $(el).prop('disabled', true).closest('label').addClass('is-disabled'))

                $('#OcrGoogle').removeAttr('disabled').click().parents().removeClass('is-disabled');

                $('#status_msg_success').text("PRO plan activated");

                setTimeout(function () {
                  $('#status_msg_success').text("");
                }, 3000);
                let enable = $('#switch-auto-translate').parent().hasClass('is-checked');
                if (enable) {
                  $('#switch-auto-translate').click();
                }
                $('#switch-auto-translate').prop('disabled', true).closest('label').addClass('is-disabled');
                $(".upgrade_status").show();
                disabledTrnslationBlock();
                /* Intnly commented*/
                // $.get(urlApi + keyChar + ".json", function (data, status, xhr) {
                //   browser.storage.sync.set({
                //     status: 'PRO',
                //     google_ocr_api_url: data.google_ocr_api_url,
                //     google_ocr_api_key: data.google_ocr_api_key
                //   });
                // });
              }
            }
            if (legacy) {
              ifSuccessRes(key);
              browser.storage.sync.set({
                status: 'PRO',
                google_ocr_api_url: data.google_ocr_api_url || '',
                google_ocr_api_key: data.google_ocr_api_key || ''
              });
              $('#copy_text').attr('checked', 'checked').closest('label').addClass('is-checked');
              $dfd.resolve(data);
            } else {
              if (data && data.status && data.status == 'on') {
                // valid key found.
                ifSuccessRes(key);
                browser.storage.sync.set({
                  status: 'PRO',
                  google_ocr_api_url: data.data1a || '',
                  google_ocr_api_key: data.data1b || ''
                });
                $('#copy_text').attr('checked', 'checked').closest('label').addClass('is-checked');
                $dfd.resolve(data);
              } else if (data && data.status && data.status == 'off') {
                browser.storage.sync.set({ "key": key });
                browser.runtime.sendMessage({ evt: "checkKey" });
                // invalid key or key not found...
                $('#status_msg').text("Subscription Expired");
                setTimeout(function () {
                  $('#status_msg').text("");
                }, 3000);
                $dfd.resolve(data);
              } else {
                // invalid key or key not found...
                $('#status_msg').text("Invalid key");
                setTimeout(function () {
                  $('#status_msg').text("");
                }, 3000);
                $dfd.reject(data);
              }
            }
          } else {
            $dfd.reject(data);
          }
        }).fail(function (data, status, xhr) {
          if ((data && data.status == 200) || !data) {
            $('#status_msg').text("Invalid key");
            setTimeout(function () {
              $('#status_msg').text("");
            }, 3000);
          } else if (data && data.status == 404) {
            $('#status_msg').text("Invalid key");
            //$('#status_msg').text("License server can not be reached. Please try again later");
            setTimeout(function () {
              $('#status_msg').text("");
            }, 3000);
          }
          $dfd.reject(data);
          // $.get(urlApi + "onlinetest.json", function (data) {

          // }).fail(function (data, status, xhr) {
          //   if (data.status == 200) {
          //     $('#status_msg').text("Invalid key");
          //     setTimeout(function () {
          //       $('#status_msg').text("");
          //     }, 3000);

          //   } else if (data.status == 404) {
          //     $('#status_msg').text("License server can not be reached. Please try again.");
          //     setTimeout(function () {
          //       $('#status_msg').text("");
          //     }, 3000);
          //   }

          // })

        });
        $('.keyChecker_input').val('');
      } else if (key.charAt(1) === 't') {
        $.get(legacy ? urlApi + keyChar + ".json" : urlApi + key.toUpperCase(), function (data, status, xhr) {
          if (xhr.status == 200) {
            const successFn = function (key) {
              browser.storage.sync.set({ "key": key });
              browser.runtime.sendMessage({ evt: "checkKey" });
              $('.show_status').each(function (index, el) {
                $(this).text('PRO+');
              });
              $('.copy-options').each((i, el) => $(el).prop('disabled', false).closest('label').removeClass('is-disabled'))
              $('#copy_text').attr('checked', 'checked').closest('label').addClass('is-checked');
              $('#OcrGoogle').removeAttr('disabled').click().parents().removeClass('is-disabled');
              $('#YandexTranslator').removeAttr('disabled').parents().removeClass('is-disabled');
              $('#DeepTranslator').removeAttr('disabled').click().parents().removeClass('is-disabled');
              $('#GoogleTranslator').removeAttr('disabled').click().parents().removeClass('is-disabled');

              $('#switch-auto-translate').removeAttr('disabled').click().parents().removeClass('is-disabled');
              $('#output-lang').removeAttr('disabled');
              $('#status_msg_success').text("PRO+ plan activated");
              setTimeout(function () {
                $('#status_msg_success').text("");
              }, 3000);
              $(".upgrade_status").hide();
            }
            if (legacy) {
              $dfd.resolve(data);
              successFn(key);
              browser.storage.sync.set({
                status: 'PRO+',
                google_ocr_api_url: data.google_ocr_api_url || '',
                google_ocr_api_key: data.google_ocr_api_key || '',
                google_trs_api_url: data.google_trs_api_url || data.google_translation_api_url || configSetting.google_translation_api_url || '',
                google_trs_api_key: data.google_trs_api_key || '',
                deepl_api_url: data.deepl_api_url || data.deepapi_translation_api_url || configSetting.deepapi_translation_api_url || '',
                deepl_api_key: data.deepl_api_key || '',
              });

              /* temp disabled may be not required
              $.get(urlApi + keyChar + ".json", function (data, status, xhr) {
                browser.storage.sync.set({
                  status: 'PRO+',
                  google_ocr_api_url: data.google_ocr_api_url,
                  google_ocr_api_key: data.google_ocr_api_key,
                  google_trs_api_url: data.google_trs_api_url,
                  google_trs_api_key: data.google_trs_api_key,
                  deepl_api_url: data.deepl_api_url || '',
                  deepl_api_key: data.deepl_api_key || '',
                });
              });
              */
            } else {
              // new api call
              if (data && data.status && data.status == 'on') {
                // valid key found.
                successFn(key);
                browser.storage.sync.set({
                  status: 'PRO+',
                  google_ocr_api_url: data.data1a || '',
                  google_ocr_api_key: data.data1b || '',
                  google_trs_api_url: configSetting.google_translation_api_url || '',
                  google_trs_api_key: data.data2a || '',
                  deepl_api_url: configSetting.deepapi_translation_api_url || '',
                  deepl_api_key: data.data2b || '',
                });
              } else if (data && data.status && data.status == 'off') {
                browser.storage.sync.set({ "key": key });
                browser.runtime.sendMessage({ evt: "checkKey" });
                // invalid key or key not found...
                $('#status_msg').text("Subscription Expired");
                setTimeout(function () {
                  $('#status_msg').text("");
                }, 3000);
                $dfd.resolve(data);
              } else {
                // invalid key or key not found...
                $('#status_msg').text("Invalid key");
                setTimeout(function () {
                  $('#status_msg').text("");
                }, 3000);
                $dfd.reject(data);
              }
            }
          }
          else {
            $dfd.reject(data);
          }
        }).fail(function (data, status, xhr) {
          if ((data && data.status == 200) || !data) {
            $('#status_msg').text("Invalid key");
            setTimeout(function () {
              $('#status_msg').text("");
            }, 3000);
          } else if (data && data.status == 404) {
            $('#status_msg').text("Invalid key");
            //$('#status_msg').text("License server can not be reached. Please try again later");
            setTimeout(function () {
              $('#status_msg').text("");
            }, 3000);
          }
          // $.get(urlApi + "onlinetest.json", function (data) {

          // }).fail(function (data, status, xhr) {
          //   if (data.status == 200) {
          //     $('#status_msg').text("Invalid key");
          //     setTimeout(function () {
          //       $('#status_msg').text("");
          //     }, 3000);
          //   } else if (data.status == 404) {
          //     $('#status_msg').text("License server can not be reached. Please try again later");
          //     setTimeout(function () {
          //       $('#status_msg').text("");
          //     }, 3000);
          //   }

          // })
          $dfd.reject(data);
        });
        $('.keyChecker_input').val('');
      } else {
        $dfd.reject('invalid_key');
        $('#status_msg').text('Invalid key');
        setTimeout(function () {
          $('#status_msg').text("");
        }, 3000);
        $('.keyChecker_input').val('');
      }


    } else {
      //if key.length !== 15
      $dfd.reject('invalid_key');
      $('#status_msg').text('Invalid key');
      setTimeout(function () {
        $('#status_msg').text("");
      }, 3000);
    }
    return $dfd;
  }










  $('.keyChecker_input').keypress(function (e) {
    if (e.which == 13) { //Enter key pressed
      $('.keyChecker_btn').click(); //Trigger search button click event
    } else if (e.which == 32) {
      //disable space button
      return e.which !== 32;
    }
  });

  //check plan button code

  $('#check-status-btn').click(function (e) {
    browser.runtime.sendMessage({ evt: "checkKey" });
  })

  //trim text in past in password field
  $(document).on('paste', '.keyChecker_input', function (e) {
    e.preventDefault();
    // prevent copying action
    const text = e.originalEvent.clipboardData.getData('Text')
    let withoutSpaces = text.trim();

    $(this).val(withoutSpaces);

  });
  //trim text in drop in password field
  $(document).on('drop', '.keyChecker_input', function (e) {
    e.preventDefault();
    // prevent copying action
    const text = e.originalEvent.dataTransfer.getData('Text')
    let withoutSpaces = text.trim();

    $(this).val(withoutSpaces);

  });

});
