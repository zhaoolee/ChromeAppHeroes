(() => {
	[
		"/inject/mobilify/touchy.js",
		"/inject/mobilify/useragent.js",
		"/inject/mobilify/fullscreen.js",
	].forEach(url => injectJs("src")(chrome.runtime.getURL(url)));
})();
