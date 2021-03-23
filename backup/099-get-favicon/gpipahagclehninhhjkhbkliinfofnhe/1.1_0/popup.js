/*global document, chrome, window*/

function getCurrentTabFavIconUrl(callback) {
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function (tabs) {
        callback(tabs[0].favIconUrl);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    getCurrentTabFavIconUrl(function (url) {
        if (url) {
            populateIcon(url);
            populateImageDimensions(url);
            resizePopupToFit();
        } else {
            clearPopup();
        }
    });
});

function populateIcon(url) {
    var fileName = getFileName(url);

    var iconElement = document.getElementById('icon');
    iconElement.src = url;
    iconElement.alt = fileName;
    iconElement.title = fileName;
    iconElement.hidden = false;

    var urlElement = document.getElementById('iconUrl');
    urlElement.innerHTML = "<a href=\"" + url + "\" target=\"_blank\">" + url + "</a>";
}

function resizePopupToFit() {
    var containerElement = document.getElementById('container');
    containerElement.style.display = "block";
    var contentWidth = containerElement.offsetWidth;
    var contentHeight = containerElement.offsetHeight;
    window.resizeTo(contentWidth, contentHeight);
}

function populateImageDimensions(url) {
    var img = new Image();
    img.addEventListener("load", function () {
        var heightElement = document.getElementById('iconHeight');
        heightElement.innerHTML = this.naturalHeight;

        var widthElement = document.getElementById('iconWidth');
        widthElement.innerHTML = this.naturalWidth;
    });
    img.src = url;
}

function clearPopup() {
    var containerElement = document.getElementById('container');
    containerElement.style.display = "none";
}

function getFileName(path) {
    return path.split('/').pop();
}