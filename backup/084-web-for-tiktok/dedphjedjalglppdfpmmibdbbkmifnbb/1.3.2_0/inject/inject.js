// Submit on shift-enter
const shiftEnterSubmit = ({target, keyCode, shiftKey}) => {
	if(!location.pathname.includes("direct") || target.tagName != "TEXTAREA"){
		return;
	}
	
	if(keyCode != 13 || shiftKey){
		return;
	}
	
	const button = target.parentElement.parentElement.qq("button");
	if(button){
		button.realClick();
	}
};
window.addEventListener("keypress", shiftEnterSubmit);
window.addEventListener("keypress", shiftEnterSubmit, 1);

injectCSS("src")(chrome.runtime.getURL("/inject/style.css"));

// DOWNLOADER
const download = (url, name) => {
	chrome.runtime.sendMessage({
		action: "download",
		url: url,
		filename: name,
	});
};

const grabAllVideos = () => {
	const grabbedClass = "grab-" + chrome.runtime.id.substr(0, 8);
	qqq(".swiper-wrapper .swiper-slide:not(." + grabbedClass + ")").forEach(swiper => {
		const buttonPlace = swiper.qq(".sidebar .tiktok-toolbar");
		if(!buttonPlace){
			return;
		}
		
		buttonPlace.insertAdjacentHTML("beforeend", `
			<div class="tiktok-toolbar-download tiktok-toolbar-section" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4NCgk8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMzgyLjU2LDIzMy4zNzZDMzc5Ljk2OCwyMjcuNjQ4LDM3NC4yNzIsMjI0LDM2OCwyMjRoLTY0VjE2YzAtOC44MzItNy4xNjgtMTYtMTYtMTZoLTY0Yy04LjgzMiwwLTE2LDcuMTY4LTE2LDE2djIwOGgtNjQgYy02LjI3MiwwLTExLjk2OCwzLjY4LTE0LjU2LDkuMzc2Yy0yLjYyNCw1LjcyOC0xLjYsMTIuNDE2LDIuNTI4LDE3LjE1MmwxMTIsMTI4YzMuMDQsMy40ODgsNy40MjQsNS40NzIsMTIuMDMyLDUuNDcyIGM0LjYwOCwwLDguOTkyLTIuMDE2LDEyLjAzMi01LjQ3MmwxMTItMTI4QzM4NC4xOTIsMjQ1LjgyNCwzODUuMTUyLDIzOS4xMDQsMzgyLjU2LDIzMy4zNzZ6Ii8+DQoJPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTQzMiwzNTJ2OTZIODB2LTk2SDE2djEyOGMwLDE3LjY5NiwxNC4zMzYsMzIsMzIsMzJoNDE2YzE3LjY5NiwwLDMyLTE0LjMwNCwzMi0zMlYzNTJINDMyeiIvPg0KPC9zdmc+DQo=');"></div>
		`);
		buttonPlace.qq(".tiktok-toolbar-download").on("click", () => {
			const video = swiper.qq("video");
			if(!video || !video.src){
				return;
			}
			
			const videoSource = video.src;
			
			const userName = swiper.qq(".bottom-name").innerText.trim().replace(/[^0-9a-z._-]/ig, "");
			const fileName = [
				"TikTok",
				"video",
				userName,
				new Date().toLocaleString().replace(/[^0-9]/ig, "-").replace(/--/ig, "_"),
			].join("_") + ".mp4";
			
			download(videoSource, fileName);
		});
		
		swiper.classList.add(grabbedClass);
	});
};

(async () => {
	while(!qq("body #main")){
		await sleep(100);
	}
	
	(new MutationObserver(grabAllVideos)).observe(qq("body #main"), {
		attributes: false,
		childList: true,
		characterData: false,
		subtree: true
	});
})();