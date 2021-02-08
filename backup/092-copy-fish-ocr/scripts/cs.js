/* globals jQuery, unescape, componentHandler */

(function ($) {
	'use strict';
	// pseudo-private members
	// var $ = jQuery;

	var appName = 'Copyfish'; //browser.i18n.getMessage('appShortName');
	var appShortName = 'Copyfish';
	var $ready;
	var HTMLSTRCOPY;
	var APPCONFIG;
	var startX, startY, endX, endY;
	var startCx, startCy, endCx, endCy;
	var IS_CAPTURED = false;
	var $SELECTOR;
	var OPTIONS;
	let isImageParse = false;
	let imageParseData = null;
	var MAX_ZINDEX = 2147483646;
	var WIDGETBOTTOM = -8;
	var SELECTOR_BORDER = 2;

	var OCR_LIMIT = {
		min: {
			width: 40,
			height: 40
		},
		max: {
			width: 2600,
			height: 2600
		}
	};
	var ISPOSITIONED = false;
	var OCR_DIMENSION_ERROR = browser.i18n.getMessage('ocrDimensionError');
	var TextOverlay = window.__TextOverlay__;
	var OcrEngine = null;
	var transitionEngine = null;

	/*
	 *  Set to true to use a JPEG image. Default is PNG
	 *  JPEG_QUALITY ranges from 0.1 to 1 and is valid only if USE_JPEG is true
	 */
	var USE_JPEG = false;
	var JPEG_QUALITY = 0.6;
	/*Utility functions*/
	var logError = function (msg, err) {
		err = err || '';
		msg = msg || 'An error occurred.';
		//console.error('Extension ' + appShortName + ': ' + msg, err);
	};



	var _searchOCRLanguageList = function (lang) {
		var result = '';
		if (OPTIONS.ocrEngine == "OcrGoogle") {
			$.each(APPCONFIG.ocr_google_languages, function (i, v) {
				if (v.lang === lang) {
					result = v;
					return false;
				}
			});
		} else if (OPTIONS.ocrEngine === "OcrSpace") {
			$.each(APPCONFIG.ocr_languages, function (i, v) {
				if (v.lang === lang) {
					result = v;
					return false;
				}
			});
		} else if (OPTIONS.ocrEngine === "OcrSpaceSecond") {
			return true
		}
		return result;
	};


	var _getLanguage = function (type, lang) {
		// var langList = APPCONFIG[type === 'OCR' ? 'ocr_languages' : 'yandex_languages'];
		var res = '';
		lang = (lang || 'en').toLowerCase();
		if (type === 'OCR') {
			res = (_searchOCRLanguageList(lang) || {}).name;
		} else {
			$.each(APPCONFIG.yandex_languages, function (k, v) {
				if (lang in v) {
					res = v[ lang ];
					return false;
				}
			});
		}
		return res;
	};
	var _setLanguageOnUI = function () {
		var ocrLang = OPTIONS.ocrEngine === "OcrSpaceSecond" ? "Auto-Detect" : _getLanguage('OCR', OPTIONS.visualCopyOCRLang);
		var translateLang = _getLanguage('translate', OPTIONS.visualCopyTranslateLang);
		$('.ocrext-label.ocrext-message span')
			.text('(' + ocrLang + ')')
			.attr({
				title: ocrLang
			});
		$('.ocrext-label.ocrext-translated span')
			.text('(' + translateLang + ')')
			.attr({
				title: translateLang
			});
		//autodetect for second engine
		if (OPTIONS.ocrEngine === "OcrSpaceSecond") {
			$('.ocrext-result').attr('dir', 'ltr');
			return
		}
		var ocrLangDir = _getLanguageDirection(ocrLang);
		$('.ocrext-result').attr('dir', ocrLangDir);
		var translateLangDir = _getLanguageDirection(translateLang);
		$('.ocrext-ocr-translated').attr('dir', translateLangDir);
	};
	var _getLanguageDirection = function (lang) {
		var rtlLanguages = [ 'arabic', 'arabian' ];
		return rtlLanguages.indexOf(lang.toLowerCase()) === -1 ? "ltr" : "rtl";
	};
	var _setOCRFontSize = function () {
		$('.ocrext-ocr-message,.ocrext-ocr-translated')
			.removeClass(function (i, className) {
				var classes = className.match(/ocrext-font-\d\dpx/ig);
				return classes && classes.length ? classes.join(' ') : '';
			})
			.addClass('ocrext-font-' + OPTIONS.visualCopyOCRFontSize);
	};
	var _setZIndex = function () {
		/*
		 * Google Translate - 1201 Perapera - 7777 GDict - 99997 Transover - 2147483647
		 */
		if (OPTIONS.visualCopySupportDicts) {
			$('.ocrext-wrapper').css('zIndex', 1200);
			let $textarea = $('textarea.ocrext-result');
			if ($('#popup_support_text').length === 0) {
				$textarea.after(`<p id="popup_support_text" class="${$textarea.prop('classList')}">${$textarea.val()}</p>`);
				$textarea.hide();
			}
		} else {
			$('.ocrext-wrapper').css('zIndex', MAX_ZINDEX);
		}
	};
	var _isImageParseError = function (data) {
		return data && data.ParsedResults && data.ParsedResults.length && data.ParsedResults[ 0 ].FileParseExitCode === -10;
	};
	var _drawQuickSelectButtons = function () {
		if (isFirefox) {
			$('.icon-action-white').addClass('firefox-ocrext');
		}
		var $btnContainer = $('.ocrext-quickselect-btn-container');
		var $btn;
		var ocrLang;
		$btnContainer.empty();
		if (OPTIONS.ocrEngine === "OcrSpaceSecond") return
		$.each(OPTIONS.visualCopyQuickSelectLangs, function (i, language) {
			if (language === 'none') {
				return true;
			}
			ocrLang = _searchOCRLanguageList(language);
			$btn = $([
				'<button class="ocrext-element ocrext-ocr-quickselect ocrext-btn mdl-button',
				'mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"></button>'
			].join(' '));
			$btn.attr({
				'data-lang': ocrLang.lang,
				'title': ocrLang.name
			}).text(ocrLang.short);
			if (OPTIONS.visualCopyOCRLang === ocrLang.lang) {
				$btn.addClass('selected');
			}
			$btnContainer.append($btn);
			// upgrade button to mdl-button
			componentHandler.upgradeElement($btn.get(0));
		});
	};
	// Background mask
	var Mask = (function () {
		var $body;
		var $MASK;
		var maskString = [
			'<div class="ocrext-element ocrext-mask">',
			'<p class="ocrext-element">Please select text to grab.</p>',
			'<div class="ocrext-overlay-corner ocrext-corner-tl"></div>',
			'<div class="ocrext-overlay-corner ocrext-corner-tr"></div>',
			'<div class="ocrext-overlay-corner ocrext-corner-br"></div>',
			'<div class="ocrext-overlay-corner ocrext-corner-bl"></div>',
			'</div>'
		].join('');

		var tl;
		var tr;
		var bl;
		var br;
		return {
			addToBody: function () {
				$body = $('body');
				if (!$MASK && !$body.find('.ocrext-mask').length) {
					$MASK = $(maskString)
						.css({
							left: 0,
							top: 0,
							width: '100%',
							height: '100%',
							zIndex: MAX_ZINDEX - 2,
							display: 'none'
						});
					$MASK.appendTo($body);
					tl = $('.ocrext-corner-tl');
					tr = $('.ocrext-corner-tr');
					br = $('.ocrext-corner-br');
					bl = $('.ocrext-corner-bl');
					this.resetPosition();
				}
				$MASK.width($(document).width());
				$MASK.height($(document).width());
				if ([ 'absolute', 'relative', 'fixed' ].indexOf($('body').css('position')) >= 0) {
					$MASK.css('position', 'fixed');
				}
				return this;
			},
			width: function (w) {
				if (w === undefined) {
					return $MASK.width();
				}
				$MASK.width(w);
			},
			height: function (h) {
				if (h === undefined) {
					return $MASK.height();
				}
				$MASK.height(h);
			},
			show: function () {
				this.resetPosition();
				$MASK.show();
				return this;
			},
			hide: function () {
				$MASK.hide();
				return this;
			},
			remove: function () {
				$MASK.remove();
				$MASK = null;
			},
			resetPosition: function () {
				var width = $(document).width();
				var height = $(document).height();
				tl.css({
					top: 0,
					left: 0,
					width: width / 2,
					height: height / 2
				});
				tr.css({
					top: 0,
					left: width / 2,
					width: width / 2,
					height: height / 2
				});
				bl.css({
					top: height / 2,
					left: 0,
					width: width / 2,
					height: height / 2
				});
				br.css({
					top: height / 2,
					left: width / 2,
					width: width / 2,
					height: height / 2
				});
			},
			reposition: function (pos) {
				var width = $(document).width();
				var height = $(document).height();
				tl.css({
					left: 0,
					top: 0,
					width: pos.tr[ 0 ],
					height: pos.tl[ 1 ]
				});
				tr.css({
					left: pos.tr[ 0 ],
					top: 0,
					width: (width - pos.tr[ 0 ]),
					height: pos.br[ 1 ]
				});
				br.css({
					left: pos.bl[ 0 ],
					top: pos.bl[ 1 ],
					width: (width - pos.bl[ 0 ]),
					height: (height - pos.bl[ 1 ])
				});
				bl.css({
					left: 0,
					top: pos.tl[ 1 ],
					width: pos.tl[ 0 ],
					height: (height - pos.tl[ 1 ])
				});
			}
		};
	}());
	/*
	 * Mutates global state by setting the OPTIONS value
	 */
	function getOptions() {
		try {
			var $optsDfd = $.Deferred();
			var theseOptions = {
				visualCopyOCRLang: '',
				visualCopyTranslateLang: '',
				// visualCopyAutoProcess: '',
				visualCopyAutoTranslate: '',
				visualCopyOCRFontSize: '',
				copyAfterProcess: '',
				copyType: '',
				visualCopySupportDicts: '',
				visualCopyQuickSelectLangs: [],
				visualCopyTextOverlay: '',
				openGrabbingScreenHotkey: 0,
				closePanelHotkey: 0,
				copyTextHotkey: 0,
				transitionEngine: '',
				ocrEngine: '',
				google_ocr_api_key: '',
				google_ocr_api_url: '',
				google_trs_api_key: '',
				google_trs_api_url: '',
				deepl_api_key: '',
				deepl_api_url: '',
				status: null
			};
			browser.storage.sync.get(theseOptions, function (opts) {
				opts.visualCopyTextOverlay = 1;
				OPTIONS = opts;
				// set the global options here
				$optsDfd.resolve();
			});
			return $optsDfd;
		}
		catch (err) {
			console.log(err);
		}
	}

	/*
	 * Mutates global state by setting the OPTIONS value
	 */
	function setOptions(opts) {
		var $optsDfd = $.Deferred();
		browser.storage.sync.set(opts, function () {
			$.extend(OPTIONS, opts);
			// set the global options here
			$optsDfd.resolve();
		});
		return $optsDfd;
	}

	/*
	 * Loads the config, HTML and options before activating the widget
	 */
	function _bootStrapResources() {
		var $dfd = $.Deferred();
		$.when(
			$.get(browser.extension.getURL('config/config.json')),
			$.get(browser.extension.getURL('/dialog.html')),
			getOptions()
		)
			.done(function (config, htmlStr) {
				if (OPTIONS.status !== "PRO+") {
					$('.translate-text-tab').addClass('disabled');
				} else {
					$('.copyfish-text-translate').css('display', 'flex');
				}
				HTMLSTRCOPY = htmlStr[ 0 ];
				//works on PC, but not Mac/Linux? OCRTranslator.APPCONFIG = APPCONFIG = JSON.parse(config[0]);
				// Note: it seems like with jQuery 3+,  $.get (ajax) directly returns a json object if you're loading a json file
				OCRTranslator.APPCONFIG = APPCONFIG = typeof config[ 0 ] === 'string' ? JSON.parse(config[ 0 ]) : config[ 0 ];
				$dfd.resolve(APPCONFIG, HTMLSTRCOPY);
			})
			.fail(function (err) {
				$dfd.reject();
				logError('Failed to initialize', err);
			});
		return $dfd;
	}

	/*
	 * Converts dataURI to a blob instance
	 */

	//zoom 0.5 mode prototype
	// async  function  resizeImage(url, width, height) {
	//
	// 	return new Promise((resolve, reject) => {
	// 		var sourceImage = new Image();
	//
	// 		sourceImage.onload = function() {
	// 			// Create a canvas with the desired dimensions
	// 			var canvas = document.createElement("canvas");
	// 			canvas.width = width;
	// 			canvas.height = height;
	//
	// 			// Scale and draw the source image to the canvas
	// 			canvas.getContext("2d").drawImage(sourceImage, 0, 0, width, height);
	//
	// 			// Convert the canvas to a data URL in PNG format
	// 			resolve(canvas.toDataURL());
	// 		}
	//
	//
	// 		sourceImage.src = url;
	// 	})
	//
	//
	// }

	async function dataURItoBlob(dataURI) {
		//Todo zoom 0.5 mode prototype
		// if ($('#zoom-btn') && $('#zoom-btn').data('value') === 0.5){
		// 	const $ocrRext = $('#ocrext-canOrig');
		// 	let resize = {
		// 		width: $ocrRext.width() * 2,
		// 		height: $ocrRext.height() * 2
		// 	};
		// 	dataURI = await resizeImage(dataURI,resize.width, resize.height);
		// }
		// convert base64/URLEncoded data component to raw binary data held in a string
		var byteString;
		if (dataURI.split(',')[ 0 ].indexOf('base64') >= 0) {
			byteString = atob(dataURI.split(',')[ 1 ]);
		} else {
			byteString = unescape(dataURI.split(',')[ 1 ]);
		}
		// separate out the mime component
		var mimeString = dataURI.split(',')[ 0 ].split(':')[ 1 ].split(';')[ 0 ];
		// write the bytes of the string to a typed array
		var ia = new Uint8Array(byteString.length);
		for (var i = 0; i < byteString.length; i++) {
			ia[ i ] = byteString.charCodeAt(i);
		}
		return new Promise((resolve, reject) => {
			resolve(
				new Blob([ ia ], { type: mimeString })
			)
		});
	}

	/*depends on the global variables startCx,startCy,endCx,endCy
	 * will not work if layout changes in between calls, but there is no way to detect this.
	 * is asynchronous, returns a promise
	 */

	function _captureImageOntoCanvas(image_parse_mode = false, imageUrl) {
		var $canOrig = $('#ocrext-canOrig'),
			$can = $('#ocrext-can'),
			$dialog = $('body').find('.ocrext-wrapper');
		var $captureComplete = $.Deferred();
		IS_CAPTURED = true;
		// capture the current tab using the background page. On success it returns
		// dataURL and zoom of the captured image
		getOptions().done(function () {
			_setLanguageOnUI();
			_setOCRFontSize();
			_drawQuickSelectButtons();
			setTimeout(function () {
				if (isFirefox) {
					browser.runtime.sendMessage({
						evt: 'capture-screen'
					}).then(function (response) {
						getOptionsCallback(response, $canOrig, $can, $dialog, image_parse_mode, imageUrl, $captureComplete)
					});
				} else {
					browser.runtime.sendMessage({
						evt: 'capture-screen'
					}, function (response) {
						getOptionsCallback(response, $canOrig, $can, $dialog, image_parse_mode, imageUrl, $captureComplete)
					});
				}
			}, 150);
		});
		return $captureComplete;
	}
	const getOptionsCallback = (response, $canOrig, $can, $dialog, image_parse_mode, imageUrl, $captureComplete) => {
		var $imageLoadDfd = $.Deferred();
		var img = new Image();
		img.onload = function () {
			$imageLoadDfd.resolve();
		};
		img.crossOrigin = "anonymous";
		img.src = image_parse_mode ? imageUrl : response.dataURL;
		$imageLoadDfd
			.done(function () {
				// the screencapture is messed up when pixel density changes; compare the window width
				// and image width to determine if it needs to be fixed
				// also, this fix problem with page zoom
				var devicePxRatio = devicePixelRatio;
				var scaleValue = 1 / devicePxRatio;
				var dpf = window.innerWidth / img.width;
				var scaleFactor = 1 / dpf,
					sx = image_parse_mode ? img.width : Math.min(startCx, endCx) * scaleFactor,
					sy = image_parse_mode ? img.height : Math.min(startCy, endCy) * scaleFactor,
					width = image_parse_mode ? img.width : Math.abs(endCx - startCx),
					height = image_parse_mode ? img.height : Math.abs(endCy - startCy),
					scaledWidth = image_parse_mode ? width : width * scaleFactor,
					scaledHeight = image_parse_mode ? height : height * scaleFactor;
				$canOrig.attr({
					width: scaledWidth,
					height: scaledHeight
				});
				$can.attr({
					width: width,
					height: height,
				});
				var ctxOrig = $canOrig.get(0).getContext('2d');
				//var ctxOrig = setupCanvas($canOrig.get(0));
				//var ctx = setupCanvas($can.get(0));
				var ctx = $can.get(0).getContext('2d');
				if (image_parse_mode) {
					ctxOrig.drawImage(img, 0, 0, scaledWidth, scaledHeight, 0, 0, scaledWidth, scaledHeight)
					ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight, 0, 0, scaledWidth, scaledHeight); // Or at whatever offset you like
				} else {
					ctxOrig.drawImage(img, sx, sy, scaledWidth, scaledHeight, 0, 0, scaledWidth, scaledHeight)
					ctx.drawImage(img, sx, sy, scaledWidth, scaledHeight, 0, 0, width, height); // Or at whatever offset you like
				}
				$dialog.css({
					opacity: 1,
					bottom: WIDGETBOTTOM
				});
				$captureComplete.resolve();
			});
	}

	function setupCanvas(canvas) {
		try {
			// Get the device pixel ratio, falling back to 1.
			var dpr = window.devicePixelRatio || 1;
			var reset = false;
			if (!$(canvas).is(":visible")) {
				$(canvas).show();
				reset = true;
			}
			// Get the size of the canvas in CSS pixels.
			var rect = canvas.getBoundingClientRect();
			// Give the canvas pixel dimensions of their CSS
			// size * the device pixel ratio.
			if (reset) {
				$(canvas).hide();
			}
			//canvas.width = rect.width * dpr;
			//canvas.height = rect.height * dpr;
			$(canvas).attr({
				width: rect.width * dpr,
				height: rect.height * dpr
			})
			var ctx = canvas.getContext('2d');
			// Scale all drawing operations by the dpr, so you
			// don't have to worry about the difference.
			ctx.scale(dpr, dpr);
			return ctx;
		} catch (err) {
			console.log(err);
			return canvas.getContext('2d');
		}
	}

	/*
	 * Returns the ID of the most responsive server
	 */
	function _getOCRServer() {
		var $dfd = $.Deferred();
		if (isFirefox) {
			browser.runtime.sendMessage({
				evt: 'get-best-server'
			}).then(function (response) {
				$dfd.resolve(response.server.id);
			});
		} else {
			browser.runtime.sendMessage({
				evt: 'get-best-server'
			}, function (response) {
				$dfd.resolve(response.server.id);
			});
		}
		return $dfd;
	}

	/*
	 * Handles the AJAX POST calls to OCR API.
	 * Failover logic happens here!
	 */
	const googleOcrCallback = (response, imageUri, $ocrPromise, startTime) => {
		const { success, data } = response;
		if (!success) {
			$ocrPromise.reject({
				type: 'OCR',
				stat: 'OCR conversion failed',
				message: 'Rate limit, try again in one minute',
				details: "limit reached",
				code: 429
			});
		}
		let responseData = response.data.responses[ 0 ];
		responseData = responseData || {};
		// retry if any error condition is met and if any servers are still available
		if (Object.keys(responseData).length === 0 && responseData.constructor === Object) {
			$ocrPromise.reject({
				type: 'OCR',
				stat: 'OCR conversion failed',
				message: 'error',
				details: responseData,
				code: responseData
			});
		} else if (responseData === null) {
			$ocrPromise.reject({
				type: 'OCR',
				stat: 'OCR conversion failed',
				message: responseData.ErrorMessage,
				details: responseData.ErrorDetails,
				code: responseData.OCRExitCode
			});
		} else if (responseData.fullTextAnnotation != null) {
			browser.runtime.sendMessage({
				evt: 'set-server-responsetime',
				serverResponseTime: (Date.now() - startTime) / 1000
			});
			let textOverlayData = {
				"Lines": [],
				"HasOverlay": true
			}
			responseData.textAnnotations.forEach(function (item, i, arr) {
				let dataToPush =
				{
					"Words": [ {
						"WordText": item.description,
						"Left": item.boundingPoly.vertices[ 0 ].x,
						"Top": item.boundingPoly.vertices[ 2 ].y,
						"Height": item.boundingPoly.vertices[ 2 ].y - item.boundingPoly.vertices[ 0 ].y,
						"Width": item.boundingPoly.vertices[ 2 ].x - item.boundingPoly.vertices[ 0 ].x
					} ],
					"MaxHeight": (item.boundingPoly.vertices[ 2 ].y - item.boundingPoly.vertices[ 0 ].y + 5) * 0.9,
					"MinTop": item.boundingPoly.vertices[ 0 ].y
				};
				if (i != 0) {
					textOverlayData.Lines.push(dataToPush)
				}
			});
			$ocrPromise.resolve(responseData.fullTextAnnotation.text, textOverlayData);
		}
	}
	function _GoogleOcr(imageUri, $ocrPromise, postData) {
		var formData = new FormData();
		if (OPTIONS.visualCopyTextOverlay) {
			formData.append('isOverlayRequired', true);
		}
		_getOCRServer().done(function (serverId) {
			var startTime;
			formData.append('apikey', OPTIONS.google_ocr_api_key);
			startTime = Date.now();
			let request = {
				"requests": [
					{
						"image": { "content": imageUri },
						"imageContext": {
							"languageHints": [
								postData.language
							]
						},
						"features": [
							{
								// if you want to detect more faces, or detect something else, change this
								"type": "DOCUMENT_TEXT_DETECTION",
								"maxResults": 1
							}
						]
					}
				]
			};
			if (isFirefox) {
				browser.runtime.sendMessage({
					evt: 'google-ocr',
					options: OPTIONS,
					request: request
				}).then(function (response) {
					googleOcrCallback(response, imageUri, $ocrPromise, startTime)
				});
			} else {
				browser.runtime.sendMessage({
					evt: 'google-ocr',
					options: OPTIONS,
					request: request
				}, function (response) {
					googleOcrCallback(response, imageUri, $ocrPromise, startTime)
				});
			}
		});
	}

	function _postToOCR($ocrPromise, postData, attempt, second_engine = false) {
		var formData = new FormData();
		if (!second_engine) formData.append('language', postData.language);
		formData.append('file', postData.blob, postData.fileName);
		if (OPTIONS.visualCopyTextOverlay) {
			formData.append('isOverlayRequired', true);
		}
		formData.append('OCREngine', second_engine ? "2" : "1");
		_getOCRServer().done(function (serverId) {
			var startTime;
			var serverList = APPCONFIG.ocr_api_list;
			var maxAttempts = serverList.length;
			var ocrAPIInfo = $.grep(serverList, function (el) {
				return el.id === serverId;
			})[ 0 ];
			formData.append('apikey', ocrAPIInfo.ocr_api_key);
			attempt += 1;
			startTime = Date.now();
			$.ajax({
				url: ocrAPIInfo.ocr_api_url,
				data: formData,
				dataType: 'json',
				cache: false,
				contentType: false,
				processData: false,
				timeout: APPCONFIG.ocr_timeout,
				type: 'POST',
				success: function (data) {
					var result;
					data = data || {};
					// retry if any error condition is met and if any servers are still available
					if ((typeof data === 'string' ||
						// OCRExitCode = -10 corresponds to a parse error due to malformed/blurry image. Not the server's fault
						data.IsErroredOnProcessing ||
						data.OCRExitCode !== 1) && !_isImageParseError(data) &&
						attempt < maxAttempts) {
						// sometimes an error string is returned
						if (isFirefox) {
							browser.runtime.sendMessage({
								evt: 'set-server-responsetime',
								serverId: ocrAPIInfo.id,
								serverResponseTime: -1
							}).then(function () {
								OCRTranslator.setStatus('progress',
									browser.i18n.getMessage('ocrProgressStatusStillWorking'), true);
								formData = null;
								_postToOCR($ocrPromise, postData, attempt);
							});
						} else {
							browser.runtime.sendMessage({
								evt: 'set-server-responsetime',
								serverId: ocrAPIInfo.id,
								serverResponseTime: -1
							}, function () {
								OCRTranslator.setStatus('progress',
									browser.i18n.getMessage('ocrProgressStatusStillWorking'), true);
								formData = null;
								_postToOCR($ocrPromise, postData, attempt);
							});
						}
						return false;
					}
					if (typeof data === 'string') {
						$ocrPromise.reject({
							type: 'OCR',
							stat: 'OCR conversion failed',
							message: data,
							details: data,
							code: data
						});
					} else if (data.IsErroredOnProcessing) {
						$ocrPromise.reject({
							type: 'OCR',
							stat: 'OCR conversion failed',
							message: data.ErrorMessage,
							details: data.ErrorDetails,
							code: data.OCRExitCode
						});
					} else if (data.OCRExitCode === 1) {
						browser.runtime.sendMessage({
							evt: 'set-server-responsetime',
							serverId: ocrAPIInfo.id,
							serverResponseTime: (Date.now() - startTime) / 1000
						});
						$ocrPromise.resolve(data.ParsedResults[ 0 ].ParsedText, data.ParsedResults[ 0 ].TextOverlay);
					} else {
						result = data.ParsedResults[ 0 ];
						$ocrPromise.reject({
							type: 'OCR',
							stat: 'OCR conversion failed',
							message: result.ErrorMessage,
							details: result.ErrorDetails,
							code: result.FileParseExitCode
						});
					}
				},
				error: function (x, t) {
					var errData;
					var stat;
					if (attempt < maxAttempts) {
						if (isFirefox) {
							browser.runtime.sendMessage({
								evt: 'set-server-responsetime',
								serverId: ocrAPIInfo.id,
								serverResponseTime: -1
							}).then(function () {
								OCRTranslator.setStatus('progress',
									browser.i18n.getMessage('ocrProgressStatusStillWorking'), true);
								formData = null;
								_postToOCR($ocrPromise, postData, attempt);
							});
						} else {
							browser.runtime.sendMessage({
								evt: 'set-server-responsetime',
								serverId: ocrAPIInfo.id,
								serverResponseTime: -1
							}, function () {
								OCRTranslator.setStatus('progress',
									browser.i18n.getMessage('ocrProgressStatusStillWorking'), true);
								formData = null;
								_postToOCR($ocrPromise, postData, attempt);
							});
						}
						return false;
					}
					try {
						errData = JSON.parse(x.responseText);
					} catch (e) {
						errData = '';
					}
					if (t === 'timeout') {
						stat = 'OCR request timed out';
					} else if (x.status === 404) {
						stat = 'OCR service is currently unavailable';
					} else {
						stat = 'An error occurred during OCR';
					}
					$ocrPromise.reject({
						type: 'OCR',
						stat: stat,
						message: stat,
						details: null,
						code: null,
						data: errData
					});
				}
			});
		});
	}

	/*
	 * Responsible for:
	 * 1. Rolling up the canvas data into a form object along with API key and language
	 * 2. POST to OCR API
	 * 3. Handle response from OCR API and POST to Yandex translate
	 * 4. AJAX error handling anywhere in the pipeline
	 *
	 *
	 */

	const _processOCRTranslate = () => {
		// var data = new FormData();
		var dataURI;
		var ocrPostData;
		var $ocr = $.Deferred();
		var $process = $.Deferred();
		var $canOrig = $('#ocrext-canOrig');
		let $capturedImage = $('.copyfish-image-view');
		var dims = {
			width: $canOrig.width(),
			height: $canOrig.height()
		};
		// read options before every AJAX call, will ensure that any changes
		// in settings are transferred to existing sessions as well
		getOptions().done(function () {
			_setOCRFontSize();
			if (OPTIONS.ocrEngine != null) {
				//select Ocr Engine
				OcrEngine = OPTIONS.ocrEngine;
				//select translation engine
				transitionEngine = OPTIONS.transitionEngine;
			}
			OCRTranslator.resetOverlayInformation();
			$process
				.done(function (txt, fromOCR) {
					if (txt === 'no-translate') {
						$('.ocrext-ocr-message').addClass('ocrext-preserve-whitespace expanded');
						$('.ocrext-grid-translated').hide();
						$('.ocrext-ocr-translated').text("");
						$('.ocrext-ocr-retranslate').hide();
						$('#copyfish-tab-image-container').css({ height: '75%' });
					} else {
						$('.ocrext-ocr-message').removeClass('ocrext-preserve-whitespace expanded');
						$('.ocrext-grid-translated').show();
						$('.ocrext-ocr-retranslate').show();
						$('.ocrext-ocr-translated')
							.text(txt)
							.show();
					}
					$('.ocrext-btn').removeClass('disabled');
					OCRTranslator.setStatus('success',
						fromOCR ? browser.i18n.getMessage('ocrSuccessStatus') : browser.i18n.getMessage('translationSuccessStatus'));
					OCRTranslator.enableContent();
				})
				.fail(function (err) {
					// All API failure handling is done here, the AJAX callbacks simply relay
					// necessary data to this callback
					$('.ocrext-btn').removeClass('disabled');
					OCRTranslator.setStatus('error', err.stat);
					// per spec, display OCR error messages inside OCR text field
					if (err.type === 'OCR') {
						$('.ocrext-ocr-message').val(err.message);
					}
					$('.ocrext-ocr-translated').text('N/A');
					OCRTranslator.enableContent();
					//console.error('Visual Copy Exception', err);
				})
				.always(function () {
					// dereference expensive objects, just in case
					// everything terminates with $process, single point of extry/exit
					dataURI = null;
					ocrPostData = null;
					$canOrig = null;
					$ocr = null;
					onOCRCopy(true)
				});
			$ocr
				.done(function (text, overlayInfo) {
					$('.ocrext-ocr-message')
						.val(text);
					$('#popup_support_text').text(text);
					// dataURI should be visible as it is encapsulated within _processOCRTranslate
					// the mad-world of async programming
					// OCRTranslator.textOverlay.setOverlayInformation(overlayInfo, dataURI);
					OCRTranslator.setOverlayInformation(overlayInfo, dataURI);
					if (OPTIONS.visualCopyTextOverlay) {
						OCRTranslator.showOverlay();
					}
					if (!OPTIONS.visualCopyAutoTranslate) {
						$process.resolve('no-translate', true);
						return true;
					}
					OCRTranslator.setStatus('progress',
						browser.i18n.getMessage('translationProgressStatus'), true);
					//detect active translate language
					if (OPTIONS.transitionEngine == "GoogleTranslator") {
						if (isFirefox) {
							browser.runtime.sendMessage({
								evt: 'google-translate',
								options: OPTIONS,
								text: text
							}).then(function (response) {
								if (response.success === true) {
									$process.resolve(response.data)
									onOCRCopy(true)
								} else if (response.success === false) {
									$process.reject({
										type: 'translate',
										stat: response.time === 'timeout' ? 'Translation request timed out' : 'An error occurred during translation',
										message: response.data.message,
										details: null,
										code: response.data.code
									});
								}
							});
						} else {
							browser.runtime.sendMessage({
								evt: 'google-translate',
								options: OPTIONS,
								text: text
							}, function (response) {
								if (response.success === true) {
									$process.resolve(response.data)
									onOCRCopy(true)
								} else if (response.success === false) {
									$process.reject({
										type: 'translate',
										stat: response.time === 'timeout' ? 'Translation request timed out' : 'An error occurred during translation',
										message: response.data.message,
										details: null,
										code: response.data.code
									});
								}
							});
						}
					} else if (OPTIONS.transitionEngine === "YandexTranslator") {
						$.ajax({
							url: APPCONFIG.yandex_api_url,
							data: {
								key: APPCONFIG.yandex_api_key,
								lang: OPTIONS.visualCopyTranslateLang,
								text: text
							},
							timeout: APPCONFIG.yandex_timeout,
							type: 'GET',
							success: function (data) {
								if (data.code === 200) {
									$process.resolve(data.text);
									onOCRCopy(true)
								}
							},
							error: function (x, t) {
								var errData;
								try {
									errData = JSON.parse(x.responseText);
								} catch (e) {
									errData = {};
								}
								$process.reject({
									type: 'translate',
									stat: t === 'timeout' ? 'Translation request timed out' : 'An error occurred during translation',
									message: errData.message,
									details: null,
									code: errData.code
								});
							}
						});
					} else if (OPTIONS.transitionEngine === "DeepTranslator") {
						if (isFirefox) {
							browser.runtime.sendMessage({
								evt: 'deepapi-translate',
								options: OPTIONS,
								text: text
							}).then(function (response) {
								if (response && response.success === true) {
									$process.resolve(response.data)
									onOCRCopy(true)
								} else if (!response) {
									$process.reject({
										type: 'translate',
										stat: 'An error occurred during translation',
										message: '',
										details: null,
										code: ''
									});
								} else if (response.success === false) {
									$process.reject({
										type: 'translate',
										stat: response.time === 'timeout' ? 'Translation request timed out' : 'An error occurred during translation',
										message: response.data.message,
										details: null,
										code: response.data.code
									});
								}
							});
						} else {
							browser.runtime.sendMessage({
								evt: 'deepapi-translate',
								options: OPTIONS,
								text: text
							}, function (response) {
								if (response && response.success === true) {
									$process.resolve(response.data)
									onOCRCopy(true)
								} else if (!response) {
									$process.reject({
										type: 'translate',
										stat: 'An error occurred during translation',
										message: '',
										details: null,
										code: ''
									});
								} else if (response.success === false) {
									$process.reject({
										type: 'translate',
										stat: response.time === 'timeout' ? 'Translation request timed out' : 'An error occurred during translation',
										message: response.data.message,
										details: null,
										code: response.data.code
									});
								}
							});
						}
					}
				})
				.fail(function (err) {
					//  receive error and relay it to $process
					$process.reject(err);
				});
			if (
				(dims.width < OCR_LIMIT.min.width && dims.height < OCR_LIMIT.min.height) ||
				(dims.width > OCR_LIMIT.max.width && dims.height > OCR_LIMIT.max.height)
			) {
				$ocr.reject({
					type: 'OCR',
					stat: 'OCR conversion failed',
					message: OCR_DIMENSION_ERROR,
					details: null,
					code: null
				});
				return false;
			}
			// Disable widget, show spinner
			OCRTranslator.disableContent();
			OCRTranslator.checkDesktopCaptureModule();
			OCRTranslator.setStatus('progress',
				browser.i18n.getMessage('ocrProgressStatus'), true);
			// POST to OCR.
			ocrPostData = {};
			ocrPostData.language = OPTIONS.visualCopyOCRLang;
			if (USE_JPEG) {
				dataURI = $canOrig.get(0).toDataURL('image/jpeg', JPEG_QUALITY);
				ocrPostData.fileName = 'ocr-file.jpg';
				dataURItoBlob(dataURI).then(function (url) {
					ocrPostData.blob = url;
					//check Ocr Engine
					if (OcrEngine === "OcrSpace") {
						_postToOCR($ocr, ocrPostData, 0);
					} else if (OcrEngine === "OcrSpaceSecond") {
						_postToOCR($ocr, ocrPostData, 0, true);
					} else if (OcrEngine === "OcrGoogle") {
						let imageUrl = dataURI.replace('data:image/png;base64,', '');
						_GoogleOcr(imageUrl, $ocr, ocrPostData)
					}
				});
			} else {
				dataURI = $canOrig.get(0).toDataURL();
				ocrPostData.fileName = 'ocr-file.png';
				dataURItoBlob(dataURI).then(function (url) {
					ocrPostData.blob = url;
					//check Ocr Engine
					if (OcrEngine === "OcrSpace") {
						_postToOCR($ocr, ocrPostData, 0);
					} else if (OcrEngine === "OcrSpaceSecond") {
						_postToOCR($ocr, ocrPostData, 0, true);
					} else if (OcrEngine === "OcrGoogle") {
						let imageUrl = dataURI.replace('data:image/png;base64,', '');
						_GoogleOcr(imageUrl, $ocr, ocrPostData)
					}
				});
			}
			/*
			 * $process::done can be called only if OCR and translation succeed
			 * $process::fail can be called if either OCR or translation fails
			 */
		});
	}

	/*Utility functions - end*/


	/* Event handlers*/
	/*
	 * Mouse move event handler. Attached on mousedown and removed on mouseup
	 */
	function onOCRMouseMove(e) {
		var l, t, w, h;
		var scrollTop = $('body').scrollTop();
		if (!scrollTop) {
			// some modern browser hack
			// Fix issue: https://github.com/teamdocs/copyfish2020/issues/4
			scrollTop = Math.max($("html").scrollTop(), $('body').scrollTop());
		}
		if (ISPOSITIONED) {
			endX = e.pageX - $('body').scrollLeft();
			endY = e.pageY - scrollTop;
			$SELECTOR.css({
				'position': 'fixed'
			});
		} else {
			endX = e.pageX;
			endY = e.pageY;
			$SELECTOR.css({
				'position': 'absolute'
			});
		}
		l = Math.min(startX, endX);
		t = Math.min(startY, endY);
		w = Math.abs(endX - startX);
		h = Math.abs(endY - startY);
		$SELECTOR.css({
			left: l,
			top: t,
			width: w,
			height: h
		});
		Mask.reposition({
			tl: [ l + SELECTOR_BORDER, t + SELECTOR_BORDER ],
			tr: [ l + w + SELECTOR_BORDER, t + SELECTOR_BORDER ],
			bl: [ l + SELECTOR_BORDER, t + h + SELECTOR_BORDER ],
			br: [ l + w + SELECTOR_BORDER, t + h + SELECTOR_BORDER ]
		});
	}
	/*
	 * mousedown event handler
	 * once mousedown occurs, selection starts. Captures the initial coords and adds the selector
	 * rectangle onto the page.
	 * Adds the mousemove and mouseup events
	 */
	function onOCRMouseDown(e) {
		if (!IS_CAPTURED) {
			IS_CAPTURED = true;
		} else {
			return true;
		}
		var $body = $('body');
		$('.ocrext-mask p.ocrext-element').css('transform', 'scale(0,0)');
		$SELECTOR = $('<div class="ocrext-selector"></div>');
		$SELECTOR.appendTo($body);
		var scrollTop = $body.scrollTop();
		if (!scrollTop) {
			// some modern browser hack
			// Fix issue: https://github.com/teamdocs/copyfish2020/issues/4
			scrollTop = Math.max($("html").scrollTop(), $body.scrollTop());
		}
		if (ISPOSITIONED) {
			startX = e.pageX - $body.scrollLeft();
			startY = e.pageY - scrollTop;
			$SELECTOR.css({
				'position': 'fixed'
			});
		} else {
			startX = e.pageX;
			startY = e.pageY;
			$SELECTOR.css({
				'position': 'absolute'
			});
		}
		startCx = e.clientX;
		startCy = e.clientY;
		$SELECTOR.css({
			left: 0,
			top: 0,
			width: 0,
			height: 0,
			zIndex: MAX_ZINDEX - 1
		});
		$body.on('mousemove', onOCRMouseMove);
		// we need the closure here. `.one` would automagically remove the listener when done
		$body.one('mouseup', function (evt) {
			var $dialog;
			isImageParse = false;
			imageParseData = null;
			endCx = evt.clientX;
			endCy = evt.clientY;
			// turn off the mousemove event, we no longer need it
			$body.off('mousemove', onOCRMouseMove);
			// manipulate DOM to remove temporary cruft
			$body.removeClass('ocrext-ch');
			$SELECTOR.remove();
			Mask.hide();
			// show the widget
			_setZIndex();
			$dialog = $body.find('.ocrext-wrapper');
			/*
			https://github.com/teamdocs/copyfish2020/issues/9
			firefox causing issue and applying css and show at same time, show should be happend when css is applied completely so
			adding animate instead of css jquery method
			$dialog
				.css({
					// zIndex: MAX_ZINDEX,
					// opacity: 0,
					bottom: -$dialog.height()
				})
				.show();
			*/
			$dialog
				.animate({
					// zIndex: MAX_ZINDEX,
					// opacity: 0,
					bottom: -$dialog.height()
				}, 0, function () {
					$dialog.show();
				});
			// initiate image capture
			_captureImageOntoCanvas().done(function () {
				_processOCRTranslate();
			});
		});
	}

	/*
	 * Redo OCR button click handler
	 * Use current viewport coords to capture, process and translate screen
	 * There is no separate button to re-submit captured image, so onOCRRedo can be reused for that
	 */
	function onOCRRedo() {
		$('.ocrext-wrapper').css('opacity', 0);
		OCRTranslator.reset();
		// timeout to ensure that a render is done before initiating next capture cycle
		setTimeout(function () {
			_captureImageOntoCanvas(isImageParse, imageParseData).done(function () {
				_processOCRTranslate();
				_setZIndex();
			});
		}, 20);
	}

	const onOcrDesktopRecapture = () => {
		browser.runtime.sendMessage({ evt: 'captureScreen' });
	};

	/*
	 * Recapture button click handler
	 * Hands control back to the user to recapture the viewport
	 */
	function onOCRRecapture() {
		IS_CAPTURED = false;
		OCRTranslator.slideDown();
		// reset stuff
		OCRTranslator.reset();
		Mask.addToBody().show();
		$('body').addClass('ocrext-ch');
	}

	/*
	 * Translate text from textarea
	 */
	function onRetranslate() {
		var $display = $.Deferred();
		$display
			.done(function (txt) {
				if (txt === 'no-translate') {
					$('.ocrext-ocr-message').addClass('ocrext-preserve-whitespace expanded');
					$('.ocrext-grid-translated').hide();
					$('.ocrext-ocr-translated').text("");
					$('.ocrext-ocr-retranslate').hide();
				} else {
					$('.ocrext-ocr-message').removeClass('ocrext-preserve-whitespace expanded');
					$('.ocrext-grid-translated').show();
					$('.ocrext-ocr-retranslate').show();
					$('.ocrext-ocr-translated')
						.text(txt)
						.show();
				}
				$('.ocrext-btn').removeClass('disabled');
				OCRTranslator.setStatus('success', browser.i18n.getMessage('translationSuccessStatus'));
				OCRTranslator.enableContent();
			})
			.fail(function (err) {
				// All API failure handling is done here, the AJAX callbacks simply relay
				// necessary data to this callback
				$('.ocrext-btn').removeClass('disabled');
				OCRTranslator.setStatus('error', err.stat);
				$('.ocrext-ocr-translated').text('N/A');
				OCRTranslator.enableContent();
				//console.error('Visual Copy Exception', err);
			});
		let firefRetrasnalte = function ($display) {
			var text = $(".ocrext-ocr-message").val();
			//detect active translate language
			if (OPTIONS.transitionEngine == "GoogleTranslator") {
				$.ajax({
					url: OPTIONS.google_trs_api_url,
					data: {
						key: OPTIONS.google_trs_api_key,
						target: OPTIONS.visualCopyTranslateLang,
						q: text
					},
					timeout: APPCONFIG.yandex_timeout,
					type: 'GET',
					success: function (data) {
						if (data.data.translations[ 0 ].translatedText != null) {
							$display.resolve(data.data.translations[ 0 ].translatedText);
						}
					},
					error: function (x, t) {
						var errData;
						try {
							errData = JSON.parse(x.responseText);
						} catch (e) {
							errData = {};
						}
						$display.reject({
							type: 'translate',
							stat: t === 'timeout' ? 'Translation request timed out' : 'An error occurred during translation',
							message: errData.message,
							details: null,
							code: errData.code
						});
					}
				});
			} else if (OPTIONS.transitionEngine === "YandexTranslator") {
				$.ajax({
					url: APPCONFIG.yandex_api_url,
					data: {
						key: APPCONFIG.yandex_api_key,
						lang: OPTIONS.visualCopyTranslateLang,
						text: text
					},
					timeout: APPCONFIG.yandex_timeout,
					type: 'GET',
					success: function (data) {
						if (data.code === 200) {
							$display.resolve(data.text);
						}
					},
					error: function (x, t) {
						var errData;
						try {
							errData = JSON.parse(x.responseText);
						} catch (e) {
							errData = {};
						}
						$display.reject({
							type: 'translate',
							stat: t === 'timeout' ? 'Translation request timed out' : 'An error occurred during translation',
							message: errData.message,
							details: null,
							code: errData.code
						});
					}
				});
			} else if (OPTIONS.transitionEngine == "DeepTranslator") {
				$.ajax({
					url: OPTIONS.deepl_api_url,
					data: {
						auth_key: OPTIONS.deepl_api_key, // appConfig temp and should be replaced by dynamic value OPTIONS.deep_trs_api_key
						target_lang: OPTIONS.visualCopyTranslateLang,
						text: text
					},
					timeout: APPCONFIG.yandex_timeout,
					type: 'GET',
					success: function (data) {
						if (data && data.translations && data.translations[ 0 ] && data.translations[ 0 ].text != null) {
							$display.resolve(data.translations[ 0 ].text);
						}
					},
					error: function (x, t) {
						var errData;
						try {
							errData = JSON.parse(x.responseText);
						} catch (e) {
							errData = {};
						}
						$display.reject({
							type: 'translate',
							stat: t === 'timeout' ? 'Translation request timed out' : 'An error occurred during translation',
							message: errData.message,
							details: null,
							code: errData.code
						});
					},
					complete: function (x) {
					}
				});
			}
		}
		getOptions().done(function () {
			_setLanguageOnUI();
			firefRetrasnalte($display);
		});
	}

	/*
	 * Close button click handler. Also called on press of ESC
	 * Close the current session and communicate this to the bg page (main extension)
	 * Release any global state captured in between
	 */

	function openGoogleTransatePage() {
		let $textarea = $('textarea.ocrext-result').val();
		let translatedText = $textarea.split(' ').join('+');
		let userLang = OPTIONS.visualCopyTranslateLang || navigator.language || navigator.userLanguage;
		let $text = `https://translate.google.com/?text=${encodeURI(translatedText)}&hl=${userLang}&langpair=auto|${userLang}&tbb=1`;
		window.open($text, '_blank');
	}

	function openDeeplTransatePage() {
		let $textarea = $('textarea.ocrext-result').val();
		let translatedText = $textarea;//.split(' ').join('+');
		let userLang = OPTIONS.visualCopyTranslateLang || navigator.language || navigator.userLanguage;
		let $text = `https://www.deepl.com/translator#de/${userLang}/${encodeURI(translatedText)}`;
		window.open($text, '_blank');
	}

	function googleTranslate($process, text) {
		if (!APPCONFIG.gtranslate.api_key) {
			$process.reject({
				type: 'translate',
				stat: 'Google translate service api key not found. Please add in config',
				message: 'Google translate service api key not found. Please add in config',
				details: null,
				code: ''
			});
			return null;
		}
		$.ajax({
			url: APPCONFIG.gtranslate.api_url,
			data: {
				key: APPCONFIG.gtranslate.api_key,
				target: OPTIONS.visualCopyTranslateLang,
				q: text
			},
			timeout: APPCONFIG.gtranslate.timeout,
			type: 'GET',
			success: function (data) {
				if (data.code === 200) {
					$process.resolve(data.text);
				}
			},
			error: function (x, t) {
				var errData;
				try {
					errData = JSON.parse(x.responseText);
					errData = errData.error || {};
				} catch (e) {
					errData = {};
				}
				$process.reject({
					type: 'translate',
					stat: t === 'timeout' ? 'Translation request timed out' : 'An error occurred during translation',
					message: errData.message,
					details: null,
					code: errData.code
				});
			}
		});
	}

	function deepApiTranslate($process, text) {
		if (!APPCONFIG.deep_api_translate.api_key) {
			$process.reject({
				type: 'translate',
				stat: 'Deep api translate api key not found. Please add in config',
				message: 'Deep api translate api key not found. Please add in config',
				details: null,
				code: ''
			});
			return null;
		}
		$.ajax({
			url: APPCONFIG.deep_api_translate.api_url,
			data: {
				auth_key: APPCONFIG.deep_api_translate.api_key,
				target_lang: OPTIONS.visualCopyTranslateLang,
				text: text
			},
			timeout: APPCONFIG.deep_api_translate.timeout,
			type: 'GET',
			success: function (data) {
				if (data.code === 200) {
					$process.resolve(data.text);
				}
			},
			error: function (x, t) {
				var errData;
				try {
					errData = JSON.parse(x.responseText);
					errData = errData.error || {};
				} catch (e) {
					errData = {};
				}
				$process.reject({
					type: 'translate',
					stat: t === 'timeout' ? 'Translation request timed out' : 'An error occurred during translation',
					message: errData.message || '',
					details: null,
					code: errData.code
				});
			}
		});
	}

	function onOCRClose(e) {
		e && e.stopPropagation();
		if (OCRTranslator.state === 'disabled') {
			return true;
		}
		$('header.ocrext-header').removeClass('minimized');
		$('.ocrext-wrapper').removeClass('ocrext-wrapper-minimized');
		OCRTranslator.disable();
		browser.runtime.sendMessage({
			evt: 'capture-done'
		});
	}
	const onOCRCopy = (translateAuto = false) => {
		/*Copy button click handler*/
		if (translateAuto && !OPTIONS.copyAfterProcess) {
			return false;
		}
		let messageTextArea = $('.ocrext-ocr-message');
		var message = messageTextArea.val();
		let activeTab = $('div[aria-selected="true"]');
		var translation = $('.ocrext-ocr-translated').text();
		var text = null;
		if (!translateAuto) {
			text = message + translation;
		} else {
			switch (OPTIONS.copyType) {
				case 'Text':
					text = message;
					break;
				case 'Translation':
					text = translation;
					break;
				default:
					text = message + translation;
			}
		}
		if (activeTab.length === 0) {
			browser.runtime.sendMessage({
				evt: 'copy',
				text: text
			});
		} else if (activeTab.hasClass('translate-text-tab')) {
			browser.runtime.sendMessage({
				evt: 'copy',
				text: translation
			});
		} else if (activeTab.hasClass('ocr-text-capture-tab')) {
			browser.runtime.sendMessage({
				evt: 'copy',
				text: message
			});
		} else {
			browser.runtime.sendMessage({
				evt: 'copy',
				text: text
			});
		}
	}


	/*
	 * @module: OCRTranslator
	 * The main translator module. Simple module pattern, no fancy constructors or factories
	 */

	var OCRTranslator = {
		/*
		 * Pseudo constructor
		 * init: load resources and bind runtime listener, once the $ready deferred
		 * resolves, render HTML on 'enableselection' event
		 * Nothing gets rendered until the user presses the browserAction atleast
		 * once within a tab. Only listeners get added and these simply bubble up
		 * (delegated to body)
		 */

		init: function () {
			// get config information
			var self = this;
			this._initializing = true;
			this._initialized = false;
			$ready = _bootStrapResources();
			// listen to runtime messages from other pages, mainly the background page
			browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
				if (sender.tab) {
					return true;
				}
				if (request.evt === 'isavailable') {
					if (self._initialized) {
						sendResponse({
							farewell: 'isavailable:OK'
						});
					} else {
						// if not yet initialized and body is still unavailable, reject
						if (!$('body').length) {
							sendResponse({
								farewell: 'isavailable:FAIL'
							});
						} else {
							$ready.done(function () {
								self._initialize();
								sendResponse({
									farewell: 'isavailable:OK'
								});
							});
						}
					}
					return true;
				}
				if (request.evt === 'enableselection') {
					// enable only if resources are loaded and available
					$ready.done(function () {
						OCRTranslator.enable();
					});
					// ACK back
					sendResponse({
						farewell: 'enableselection:OK'
					});
				} else if (request.evt === "disableselection") {
					if (OCRTranslator.state === 'disabled') {
						return true;
					}
					$ready.done(function () {
						OCRTranslator.disable();
					});
				} else if (request.evt === "translateCapturedImage") {
					this.textOverlay = TextOverlay();
					isImageParse = true;
					imageParseData = request.data;
					if (OCRTranslator.state !== 'enabled') this.bindEvents();
					OCRTranslator.state = 'enabled';
					_captureImageOntoCanvas(true, request.data).done(function () {
						_processOCRTranslate();
					});
				} else if (request.evt === 'image_for_parse') {
					isImageParse = true;
					imageParseData = request.data;
					let $body = $('body');
					var $dialog;
					// manipulate DOM to remove temporary cruft
					$body.removeClass('ocrext-ch');
					// turn off the mousemove event, we no longer need it
					$body.off('mousemove', onOCRMouseMove);
					Mask.hide();
					// show the widget
					_setZIndex();
					$dialog = $body.find('.ocrext-wrapper');

					// $dialog
					// 	.css({
					// 		// zIndex: MAX_ZINDEX,
					// 		// opacity: 0,
					// 		bottom: -$dialog.height()
					// 	})
					// 	.show();
					$dialog
						.animate({
							// zIndex: MAX_ZINDEX,
							// opacity: 0,
							bottom: -$dialog.height()
						}, 0, function () {
							$dialog.show();
						});
					// initiate image capture
					_captureImageOntoCanvas(true, request.data).done(function () {
						_processOCRTranslate();
					});
				}
			});
			$(document).ready(function () {
				if (!self._initialized && !self._initializing) {
					$ready.done(function () {
						self._initialize();
					});
				}
			});
			return this;
		},
		_initialize: function () {
			// kind of like using a lock
			this._initializing = false;
			this._initialized = true;
			ISPOSITIONED = [ 'absolute', 'relative', 'fixed' ].indexOf($('body').css('position')) >= 0;
			this.initWidgets();
			this.bindEvents();
			this.addIconToTranslateButton();
			// tell the background page that the tab is ready
			browser.runtime.sendMessage({
				evt: 'ready'
			});
		},


		addIconToTranslateButton: function () {
			let $translateButtonImg = $('#popup_translate_button img');
			$translateButtonImg.attr('src', browser.runtime.getURL("images/translate.png"));
			let $translateButtonDeeplImg = $('#deepl_translate_button img');
			//alert(browser.runtime.getURL("images/translate.png"));
			//alert(browser.runtime.getURL("images/deepl.jpg"));
			$translateButtonDeeplImg.attr('src', browser.runtime.getURL("images/deepl.jpg"));
		},

		initWidgets: function () {
			$('body').append(HTMLSTRCOPY);
			if (OPTIONS.status.toLowerCase() === 'free plan') {
				$('.ocrext-title span').text(appName);
			} else {
				$('.ocrext-title span').text(appName + " " + OPTIONS.status);
			}
			if (!OPTIONS.visualCopyAutoTranslate) {
				$('.ocrext-ocr-message').addClass('ocrext-preserve-whitespace expanded');
				$('.ocrext-grid-translated').hide();
			}
			// set paragraph font
			_setLanguageOnUI();
			// set OCR font size
			_setOCRFontSize();
			// draw quick selection buttons
			_drawQuickSelectButtons();
			// upgrade buttons
			$('button.ocrext-btn').each(function (i, el) {
				componentHandler.upgradeElement(el);
			});
			// upgrade spinner
			componentHandler.upgradeElement($('.ocrext-spinner').get(0));
		},

		/*
		 * Bind listeners for interactive elements exposed to user
		 * click - redo ocr, recapture, close, copy-to-clipboard
		 */
		bindEvents: function () {
			var $body = $('body');
			let $translateButton = $('#popup_translate_button');
			let $translateButtonDeepl = $('#deepl_translate_button');
			var self = this;
			$translateButtonDeepl
				.on('click', $translateButtonDeepl, openDeeplTransatePage);
			$translateButton
				.on('click', $translateButton, openGoogleTransatePage);
			$body
				.on('dblclick', '.ocrext-textoverlay-container', function () {
					if ($('#ocrext-can').parents('.ocrext-content').hasClass('ocrext-disabled')) {
						return true;
					}
					if (OPTIONS.visualCopyTextOverlay) {
						self.showOverlayTab();
					} else {
						window.alert('Please enable the "Show Text Overlay" option to view text overlays.');
					}
				})
				.on('dblclick', '#ocrext-can', function () {
					if ($(this).parents('.ocrext-content').hasClass('ocrext-disabled')) {
						return true;
					}
					if (OPTIONS.visualCopyTextOverlay) {
						self.showOverlayTab();
					} else {
						window.alert('Please enable the "Show Text Overlay" option to view text overlays.');
					}
				})
				.on('click', '.ocrext-ocr-recapture', onOCRRecapture)
				.on('click', '.ocrext-ocr-retranslate', onRetranslate)
				.on('click', '.ocrext-ocr-sendocr', onOCRRedo)
				.on('click', '.ocrext-ocr-desktop-recapture', onOcrDesktopRecapture)
				.on('click', '.ocrext-closeToolbar-link', onOCRClose)
				.on('click', '.ocrext-ocr-copy', onOCRCopy)
				.on('click', '.ocrext-ocr-quickselect', function () {
					var $el = $(this);
					/*if($el.hasClass('selected')){
					 return false;
					 }*/
					$el.siblings().removeClass('selected');
					$el.addClass('selected');
					setOptions({
						visualCopyOCRLang: $(this).attr('data-lang')
					}).done(function () {
						onOCRRedo();
					});
				})
				.on('click', 'header.ocrext-header', function () {
					/*click handler for header*/
					var $this = $(this);
					if ($this.hasClass('minimized')) {
						$('.ocrext-wrapper').removeClass('ocrext-wrapper-minimized');
						$this.removeClass('minimized');
					} else {
						$('.ocrext-wrapper').addClass('ocrext-wrapper-minimized');
						$this.addClass('minimized');
					}
				})
				.on('click', '.ocrext-settings-link', function (e) {
					/*Settings  (gear icon) click handler*/
					e.stopPropagation();
					browser.runtime.sendMessage({
						evt: 'open-settings'
					});
				}).on('click', 'a.ocrext-open-tab-link', function (e) {
					/*Settings  (gear icon) click handler*/
					e.stopPropagation();
					browser.runtime.sendMessage({
						evt: 'imageOcrInTab',
						data: $('#ocrext-can').get(0).toDataURL()
					});
				});
			/*ESC handler. */
			$(document).on('keyup', function (e) {
				if (e.keyCode === 27) {
					onOCRClose();
				}
			});
			return this;
		},

		/*
		 * Enable selection within the viewport. Render the HTML if it does not already exist
		 * Why render again? Some rogue pages might empty the entire HTML content for some reason
		 */
		enable: function () {
			var $body = $('body');
			/* check again before enabling selection. If the page has decided to empty body and
			 * rerender, the extension code will also be lost
			 */
			if (!$body.find('.ocrext-wrapper').length) {
				$body.append(HTMLSTRCOPY);
			}
			$body.addClass('ocrext-overlay ocrext-ch')
				.find('.ocrext-wrapper')
				.hide();
			if (OPTIONS.status.toLowerCase() === 'free plan') {
				$('.ocrext-title span').text(appName);
			} else {
				$('.ocrext-title span').text(appName + " " + OPTIONS.status);
			}
			OCRTranslator.reset();
			// show mask
			Mask.addToBody().show();
			// instantiate overlay
			this.textOverlay = TextOverlay();
			$body.on('mousedown', onOCRMouseDown);
			OCRTranslator.state = 'enabled';
			return this;
		},

		/*
		 * Hide the widget. Does not destroy/recreate, the widget size isn't big enough
		 * to adversely impact page weight
		 */
		disable: function () {
			var $body = $('body');
			try {
				$body.removeClass('ocrext-overlay ocrext-ch')
					.find('.ocrext-wrapper')
					.hide();
				$body.off('mousedown', onOCRMouseDown);
				OCRTranslator.state = 'disabled';
				Mask.remove();
				OCRTranslator.reset();
				IS_CAPTURED = false;
			} catch (e) {
				console.log(e)
			}
			return this;
		},

		// reset anything that requires resetting
		reset: function () {
			$('.ocrext-status').text('').removeClass('ocrext-success ocrext-error ocrext-progress');
			$('.ocrext-result').text('N/A');
			$('.ocrext-result').attr({
				title: ''
			});
			if (this.textOverlay) {
				this.resetOverlay();
			}
			return this;
		},
		// spinner logic
		enableContent: function () {
			$('.ocrext-spinner').removeClass('is-active');
			$('.ocrext-content').removeClass('ocrext-disabled');
			$('.ocrext-btn-container .ocrext-btn:not(".ocrext-ocr-desktop-recapture")').removeClass('disabled').removeAttr('disabled');
			$('.ocrext-quickselect-btn-container .ocrext-btn').removeClass('disabled').removeAttr('disabled');
			return this;
		},
		// spinner logic
		disableContent: function () {
			$('.ocrext-spinner').addClass('is-active');
			$('.ocrext-content').addClass('ocrext-disabled');
			$('.ocrext-btn-container .ocrext-btn').addClass('disabled').attr('disabled', 'disabled');
			$('.ocrext-quickselect-btn-container .ocrext-btn').addClass('disabled').attr('disabled', 'disabled');
			return this;
		},
		checkDesktopCaptureModule: () => {
			if (isFirefox) {
				browser.runtime.sendMessage({ evt: "checkDesktopCaptureSoftware" }).then(function (response) {
					if (response) $('.ocrext-ocr-desktop-recapture').removeClass('disabled').removeAttr('disabled');
				});
			} else {
				browser.runtime.sendMessage({ evt: "checkDesktopCaptureSoftware" }, function (response) {
					if (response) $('.ocrext-ocr-desktop-recapture').removeClass('disabled').removeAttr('disabled');
				});
			}
		},
		// Utility to set the status - progress, error and success are supported
		// pass noAutoClose as true if the status message must be persisted beyond 10s
		/*
			https://github.com/teamdocs/copyfish2020/issues/9
			firefox causing issue and applying css and show at same time, show should be happend when css is applied completely so
			adding animate instead of css jquery method
			$dialog.css({
				bottom: -$dialog.height()
			});
		*/

		setStatus: function (status, txt, noAutoClose) {
			if (status === 'error') {
				$('.ocrext-content').addClass('ocrext-error');
			} else {
				$('.ocrext-content').removeClass('ocrext-error');
			}
			$('.ocrext-status')
				.removeClass('ocrext-success ocrext-error ocrext-progress')
				.addClass(status === 'error' ? 'ocrext-error' :
					(status === 'success' ? 'ocrext-success' : 'ocrext-progress'))
				.text(txt);
			if (!noAutoClose) {
				setTimeout(function () {
					$('.ocrext-status').removeClass('ocrext-success ocrext-error ocrext-progress');
				}, 10000);
			}
		},
		slideDown: function () {
			var $dialog = $('.ocrext-wrapper');
			$dialog.animate({
				bottom: -$dialog.height()
			});
		},
		slideUp: function () {
			$('.ocrext-wrapper').css('bottom', WIDGETBOTTOM);
		},
		setOverlayInformation: function (overlay, imgDataURI) {
			this._overlay = overlay;
			// this._imgDataURI = imgDataURI;
		},
		resetOverlayInformation: function () {
			this._overlay = null;
			// this._imgDataURI = null;
		},
		showOverlay: function () {
			var $canvas = $('#ocrext-can');
			var $canvasOrig = $('#ocrext-canOrig');
			this.textOverlay
				.setOverlayInformation(this._overlay, $canvas.width(), $canvas.height(), null, $canvas.width() / $canvasOrig.width())
				.show();
		},
		showOverlayTab: function () {
			var $canvas = $('#ocrext-can');
			browser.runtime.sendMessage({
				evt: 'imageOcrInTab',
				data: $canvas.get(0).toDataURL()
			});
			//old overlay tab code
			// browser.runtime.sendMessage({
			// 	evt: 'show-overlay-tab',
			// 	overlayInfo: this._overlay,
			// 	imgDataURI: $canvas.get(0).toDataURL(),
			// 	canWidth: $canvas.width(),
			// 	canHeight: $canvas.height(),
			// 	zoom: $canvas.width() / $canvasOrig.width()
			// }, function () {
			// 	/*	 done */
			// });
		},
		hideOverlay: function () {
			this.textOverlay.hide();
		},
		resetOverlay: function () {
			this.textOverlay.reset().hide();
		}
	};
	getOptions().done(function () {
		$('body').on("keydown", function (e) {
			if (e.ctrlKey && e.shiftKey) {
				if (e.keyCode === OPTIONS.openGrabbingScreenHotkey) {
					browser.runtime.sendMessage({
						evt: 'activate'
					});
					e.stopPropagation();
					e.preventDefault();
					return false;
				} else if (e.keyCode === OPTIONS.closePanelHotkey) {
					$(".ocrext-closeToolbar-link").click();
					e.stopPropagation();
					e.preventDefault();
					return false;
				} else if (e.keyCode === OPTIONS.copyTextHotkey) {
					$(".ocrext-ocr-copy").click();
					e.stopPropagation();
					e.preventDefault();
					return false;
				}
			}
		});
	});
	OCRTranslator.init();
}(jQuery));
