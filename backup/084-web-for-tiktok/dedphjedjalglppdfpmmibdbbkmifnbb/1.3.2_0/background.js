let extensionWindow = null;
let extensionTab = null;

const generateRootUrl = () => {
	const uiLanguage = chrome.i18n.getUILanguage() || "en";
	
	return `https://www.tiktok.com/trending/?lang=${uiLanguage}`;
};

const openAppWindow = url => {
	if(!extensionWindow){
		chrome.windows.create({
			url: url || generateRootUrl(),
			width: 400,
			height: 812,
			type: "popup"
		}, addedTab => {
			extensionWindow = addedTab.id;
			extensionTab = addedTab.tabs[0].id;
		});
	
	}else{
		if(url){
			chrome.windows.update(extensionWindow, {
				url,
			});
		}
		chrome.windows.update(extensionWindow, {
			focused: true,
		});
	}
};

chrome.browserAction.onClicked.addListener(() => openAppWindow());

chrome.windows.onRemoved.addListener(removedWindowId => {
	if(removedWindowId == extensionWindow){
		extensionWindow = null;
		extensionTab = null;
	}
});

// ADD HEADERS
const requestExtraParams = ["blocking", "requestHeaders"];
if(chrome.webRequest.OnBeforeSendHeadersOptions.hasOwnProperty('EXTRA_HEADERS')) {
	requestExtraParams.push("extraHeaders");
}
chrome.webRequest.onBeforeSendHeaders.addListener(request => {
	if(request.tabId !== extensionTab){
		return;
	}
	const requestHeaders = request.requestHeaders;
	
	for (let i = 0; i < requestHeaders.length; i++){
		if ("User-Agent" === requestHeaders[i].name) {
			requestHeaders[i].value = "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Mobile Safari/537.36";
			break;
		}
	}
	return {
		requestHeaders: requestHeaders
	};
}, {
	urls: ["*://*.tiktok.com/*"]
}, requestExtraParams);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	switch(message.action){
		case "download":
			chrome.downloads.download({
				url: message.url,
				filename: message.filename,
			});
			break;
			
		case "openInAppWindow":
			openAppWindow(message.url);
			break;
	}
});