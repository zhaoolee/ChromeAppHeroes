
var defaultOptions = {

    // Plugin
    middleMouse       : true, 

    // Scrolling Core
    framerate         : 150, // [Hz]
    animationTime     : 400, // [px]
    stepSize          : 100, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm    : true,
    pulseScale        : 4,
    pulseNormalize    : 1,

    // Acceleration
    accelerationDelta : 50,  // 20
    accelerationMax   : 3,   // 1

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,    // [px]

    // Other
    touchpadSupport   : false,
    fixedBackground   : true, 
    reverseDirection  : false, // for linux users mostly
    excluded          : "example.com, another.example.com"    
};


// Fired when the extension is first installed, 
// when the extension is updated to a new version, 
// and when Chrome is updated to a new version.
chrome.runtime.onInstalled.addListener(init);

function init(details) {
    if (details.reason == "install") {
        chrome.storage.sync.set(defaultOptions);
        var optionsPage = chrome.runtime.getURL("pages/options.html");
        chrome.tabs.create({ url: optionsPage });
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach(addSmoothScrollToTab);
        });

        chrome.tabs.create({ url: "https://www.smoothscroll.net/recommend/" });
        localStorage.promo_home_newtab_shown = 'true';
    }
    /*
    if (/update|install/i.test(details.reason) &&
        localStorage.bug_500144_shown != 'true' &&
        Math.random() < 0.1) {
        // temporary bug page
        localStorage.bug_500144_shown = 'true';
        var bugPage = chrome.runtime.getURL("pages/bug/chrome_bug.html");
        chrome.tabs.create({ url: bugPage });
    }
    */
}

function addSmoothScrollToTab(tab) {
    chrome.tabs.executeScript(tab.id, {
        file: "src/sscr.js",
        allFrames: true
    });
    chrome.tabs.executeScript(tab.id, {
        file: "src/middlemouse.js",
        allFrames: true
    });
}

if (chrome.runtime.setUninstallURL && !window.DEV) 
  chrome.runtime.setUninstallURL("https://www.smoothscroll.net/farewell/");
