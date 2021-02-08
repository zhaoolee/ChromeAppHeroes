window.browser = (function () {
	return window.msBrowser ||
		window.browser ||
		window.chrome;
})();

const isFirefox = typeof InstallTrigger !== 'undefined';


(function () {
	'use strict';
	var TextOverlay = function () {
		var _overlay;
		var $container;
		var htmlString;
		var wordString;
		var $overlay;
		var _overlayInstance;
		var _init;



		var _isOverlayAvailable = function () {
			return !!_overlay && _overlay.HasOverlay;
		};
		$container = $('.ocrext-textoverlay-container');

		htmlString = [
			'<div class="ocrext-element ocrext-text-overlay">',
			'<div class="ocrext-element ocrext-text-overlay-word-wrapper">',
			'<img class="ocrext-element ocrext-text-overlay-img text-overlay-img" />',
			'</div>',
			'</div>'
		].join('');
		wordString = '<span class="ocrext-element ocrext-text-overlay-word"></span>';

		_init = function (self) {
			var run;
			// $('title,.title').text(browser.i18n.getMessage('appName') + ' - ' + browser.i18n.getMessage('overlayTab'));
			// `self` is passed; pythonic!
			$(htmlString).appendTo($container);
			$overlay = $('.ocrext-textoverlay-container')

			$container.on('click', '.ocrext-close-link', function () {
				_overlayInstance.hide();
			});
		};

		_overlayInstance = {

			setOverlayInformation: function (overlayInfo, canvasWidth, canHeight, imgDataURI, zoom) {
				// if setOverlayInformation is called when _overlay is already set, do nothing!
				if (!_overlay) {
					_overlay = overlayInfo;

					this.render(canvasWidth, canHeight, imgDataURI, zoom);
				}
				return this;
			},
			getOverlayInformation: function () {
				return _overlay;
			},
			render: function (canvasWidth, canvasHeight, imgDataURI, zoom) {
				zoom = zoom || 1;
				if (_isOverlayAvailable()) {
					var lines = _overlay.Lines;
					var $wordWrapper = $overlay.find('.ocrext-text-overlay-word-wrapper');
					var $word;

					console.log($overlay.length,$wordWrapper.length, 9999)

					if (imgDataURI) {
						$container.find('.text-overlay-img').attr('src', imgDataURI);
					}

					this.setDimensions(canvasWidth, canvasHeight);
					$.each(lines, function (i, line) {
						var maxLineHeight = line.MaxHeight * zoom;
						var minLineTopDist = line.MinTop * zoom;
						$.each(line.Words, function (j, word) {
							$word = $(wordString);
							$word
								.text(word.WordText)
								.css({
									left: word.Left * zoom,
									top: minLineTopDist,
									height: maxLineHeight,
									width: word.Width * zoom,
									fontSize: maxLineHeight * 0.7
								})
								.appendTo($wordWrapper);
							$word = null;
						});

					});
				}
				return this;
			},

			setDimensions: function (width, height) {

				$.each([$overlay, $overlay.find('.ocrext-text-overlay-word-wrapper')], function () {
					this.width(width).height(height);
				});

				return this;
			},

			reset: function () {
				_overlay = null;
				$overlay.find('.ocrext-text-overlay-word-wrapper span').remove();
				return this;
			},

			show: function () {
				if (_isOverlayAvailable()) {
					// this.position();
					$container.addClass('visible');
					$overlay.addClass('visible');
					$container.find('.ocrext-text-overlay').addClass('visible');

				} else {
					// logError('Overlay is unavailable.');
					// window.alert('Sorry. Text overlay is currently unavailable.');
				}
				return this;
			},

			hide: function () {
				$container.removeClass('visible');
				$overlay.removeClass('visible');
				$container.find('.ocrext-text-overlay').remove('visible');
				return this;
			},

			position: function () {
				var bodyWidth, bodyHeight;
				var $body = $('body');
				bodyWidth = $body.width();
				bodyHeight = $(window).height();
				$overlay.css({
					left: bodyWidth / 2 - $overlay.width() / 2,
					top: 150
				});
				return this;
			},

			setTitle: function () {
				$('title,.ocrext-textoverlay-title').text(browser.i18n.getMessage('overlayTab'));
				return this;
			},

			listenToBackgroundEvents: function () {
				var self = this;
				browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {

					console.log(request.evt, 8789)

					if (sender.tab) {
						return true;
					}



					if (request.evt === 'init-overlay-tab') {
						self.setOverlayInformation(request.overlayInfo, request.canWidth, request.canHeight, request.imgDataURI, request.zoom);
						// self.position();
						self.show();
						sendResponse({
							farewell: 'init-overlay-tab:OK'
						});
						return true;
					}
				});
			}

		};
		_init(_overlayInstance);
		return _overlayInstance;
	};

	// future proofing
	var run = $('body').attr('data-ocrext-run');
	var textOverlay;
	if (run) {
		textOverlay = TextOverlay();
		textOverlay.listenToBackgroundEvents();
		textOverlay.setTitle();
	}

	window.__TextOverlay__ = TextOverlay;
}());
