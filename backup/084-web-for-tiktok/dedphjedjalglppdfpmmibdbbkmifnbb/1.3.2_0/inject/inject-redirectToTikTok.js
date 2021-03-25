const openInAppWindow = url => {
	chrome.runtime.sendMessage({
		action: "openInAppWindow",
		url: url,
	});
};

window.addEventListener("click", (event) => {
	let link = event.target;
	while(link && link.tagName != "A"){
		link = link.parentElement;
	}
	if(!link){
		return;
	}
	
	if(link.hostname.toLowerCase().includes("tiktok.com")){
		openInAppWindow(link.href);
		event.preventDefault();
		event.stopPropagation();
	}
});
