'use strict';

let dataUrls = [];

tabbis({
	tabActiveFallback: 0
});

document.addEventListener("tabbis", e => {
	let data = e.detail.tab;

	if ($(data).attr('id') === 'tab-0-0') {
		$('#tabpanel-0-0').removeClass('canvas-hidden')
	} else {
		$('#tabpanel-0-0').addClass('canvas-hidden')
	}
}, false);


let ScreenCap = {

	sum: (...list) => {
		return list.reduce((x, y) => x + y, 0);
	},

	blobToDataURL: (blob, withBase64Prefix = false) => {
		return new Promise((resolve, reject) => {
			let reader = new FileReader()
			reader.onerror = reject
			reader.onload = (e) => {

				const str = reader.result

				const b64 = 'base64,'
				const i = str.indexOf(b64)
				const ret = str.substr(i + b64.length)

				$('.copyfish-image-view').attr('src', 'data:image/png;base64, ' + ret)
				resolve(ret)
			}
			reader.readAsDataURL(blob)
		})
	},

	dataURItoArrayBuffer: (dataURI) => {
		// convert base64 to raw binary data held in a string
		// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
		var byteString = atob(
			/^data:/.test(dataURI) ? dataURI.split(',')[ 1 ] : dataURI
		);

		// write the bytes of the string to an ArrayBuffer
		var ab = new ArrayBuffer(byteString.length);

		// create a view into the buffer
		var ia = new Uint8Array(ab);

		// set the bytes of the buffer to the correct values
		for (var i = 0; i < byteString.length; i++) {
			ia[ i ] = byteString.charCodeAt(i);
		}

		return ab
	},

	concatUint8Array: (...arrays) => {
		const totalLength = ScreenCap.sum(...arrays.map(arr => arr.length));
		const result = new Uint8Array(totalLength);
		for (let i = 0, offset = 0, len = arrays.length; i < len; i += 1) {
			result.set(arrays[ i ], offset);
			offset += arrays[ i ].length;
		}
		return result;
	},

	readFileAsArrayBuffer: (range) => {

		return new Promise((resolve, reject) => {
			const result = range.rangeEnd > range.rangeStart ? dataUrls.concat([ range.buffer ]) : dataUrls;

			console.log(dataUrls, 12312312);
			const arr = ScreenCap.concatUint8Array(...result.map(result => new Uint8Array(ScreenCap.dataURItoArrayBuffer(result))));
			console.log(arr.buffer, 12312312);
			resolve(arr.buffer);
		});
	},

	readFileAsBlob: (range) => {
		return new Promise((resolve, reject) => {
			resolve(ScreenCap.readFileAsArrayBuffer(range)
				.then(buffer => new Blob([ buffer ])));
		});

	},

	readFileAsDataURL: (range, withBase64Prefix = true) => {

		return ScreenCap.readFileAsBlob(range)
			.then(blob => ScreenCap.blobToDataURL(blob, withBase64Prefix));
	},

	init: function () {
		this.title = browser.i18n.getMessage('appName') + ' - ' + browser.i18n.getMessage('screenCapture');
		$('title,.title').text(this.title);
		$('.placeholder').text(browser.i18n.getMessage('screenCaptureWaitMessage'));
		$('.settings-icon').click((e) => {
			e.stopPropagation();
			browser.runtime.sendMessage({
				evt: 'open-settings'
			});
		})

		function resizedataURL(datas) {
			var imageLoadDfd = $.Deferred();
			// We create an image to receive the Data URI
			var img = document.createElement('img');
			var devicePxRatio = devicePixelRatio;
			var scaleValue = 1 / devicePxRatio;
			// When the event "onload" is triggered we can resize the image.
			img.onload = function () {
				// We create a canvas and get its context.
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				var wantedWidth = img.width * scaleValue;
				var wantedHeight = img.height * scaleValue;
				// We set the dimensions at the wanted size.
				canvas.width = wantedWidth;
				canvas.height = wantedHeight;
				// We resize the image with the canvas method drawImage();
				ctx.drawImage(this, 0, 0, wantedWidth, wantedHeight);
				var dataURI = canvas.toDataURL();
				imageLoadDfd.resolve(dataURI);
				//return dataURI;
				/////////////////////////////////////////
				// Use and treat your Data URI here !! //
				/////////////////////////////////////////
			};
			img.src = datas;
			// We put the Data URI in the image's src attribute

			return imageLoadDfd;
		}
		browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
			console.log(request.evt, 8789)
			if (request.evt === 'desktopcaptureData') {
				// enable only if resources are loaded and available
				console.log(request.result, 9999)
				if (request.result.buffer) {
					/* Old code witohut adjusting the devicePixcelRatio
					$('#copyfish-tab-image').attr('src', `data:application/octet-stream;base64,${request.result.buffer}`)
					browser.runtime.sendMessage({evt: "translateDesktopCapturedImage", data: `data:application/octet-stream;base64,${request.result.buffer}`})
					const setImage = ScreenCap.readFileAsDataURL(request.result);
					$('.placeholder')
						.text(browser.i18n.getMessage('screenCaptureNotify'))
						.addClass('notify');
					*/
					// do adjust of devicePixelRatio because nmost app already done the adjustment...
					resizedataURL(`data:application/octet-stream;base64,${request.result.buffer}`).done(function (resultDataUri) {

						request.result.buffer = resultDataUri;
						$('#copyfish-tab-image').attr('src', `${request.result.buffer}`)
						browser.runtime.sendMessage({ evt: "translateDesktopCapturedImage", data: `${request.result.buffer}` })
						const setImage = ScreenCap.readFileAsDataURL(request.result);
						$('.placeholder')
							.text(browser.i18n.getMessage('screenCaptureNotify'))
							.addClass('notify');
					});
				} else {
					$('#copyfish-tab-image').attr('src', request.result)
					browser.runtime.sendMessage({ evt: "translateDesktopCapturedImage", data: request.result })
				}
			}
			// ACK back
			return true;
		});
	}

};
$(ScreenCap.init);

