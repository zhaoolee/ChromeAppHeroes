/*
	INJECT USERAGENT
*/
Object.defineProperty(navigator, 'userAgent', {
	value: 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Mobile Safari/537.36',
	configurable: true,
});

Object.defineProperty(navigator, 'appVersion', {
	value: '5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Mobile Safari/537.36',
	configurable: true,
});

Object.defineProperty(navigator, 'maxTouchPoints', {
	value: 1,
	configurable: true,
});

const actualCode =  '(' + function(){
	'use strict';
	if(document.currentScript){
		document.currentScript.remove();
	}
	
	let navigator = window.navigator;
	navigator.__defineGetter__("userAgent", () => "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Mobile Safari/537.36");
	let modifiedNavigator;
	if ('userAgent' in Navigator.prototype) {
		modifiedNavigator = Navigator.prototype;
	} else {
		modifiedNavigator = Object.create(navigator);
		Object.defineProperty(window, 'navigator', {
			value: modifiedNavigator,
			configurable: false,
			enumerable: false,
			writable: false
		});
	}
	Object.defineProperties(modifiedNavigator, {
		userAgent: {
			value: 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Mobile Safari/537.36',
			configurable: false,
			enumerable: true,
			writable: false
		},
		appVersion: {
			value: '5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Mobile Safari/537.36',
			configurable: false,
			enumerable: true,
			writable: false
		},
		maxTouchPoints: {
			value: 1,
			configurable: false,
			enumerable: true,
			writable: false
		},
	});

	let screenOrientation = window.screen.orientation;
	let modifiedScreenOrientation;
	if ('type' in ScreenOrientation.prototype) {
		modifiedScreenOrientation = ScreenOrientation.prototype;
	} else {
		modifiedScreenOrientation = Object.create(screenOrientation);
		Object.defineProperty(window.screen, 'orientation', {
			value: modifiedScreenOrientation,
			configurable: false,
			enumerable: false,
			writable: false
		});
	}
	Object.defineProperties(modifiedScreenOrientation,{
		type: {
			value: 'portrait-primary',
			configurable: false,
			enumerable: true,
			writable: false,
		},
	});
}.toString().replace(/(\r|\n|\t)/ig, "") + ')();';

const script = document.createElement('script');
script.innerHTML = actualCode;
document.documentElement.appendChild(script);
