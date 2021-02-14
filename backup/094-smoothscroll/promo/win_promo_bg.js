win_promo_check(true);

/*
setTimeout(function () {
    if (localStorage.win_promo_discreet_stat_sent != 'true') {
        chrome.storage.local.get('lastDiscreetWheel', function (o) {
            localStorage.win_promo_discreet_stat_sent = 'true';
            var usedDiscreetWheel = Date.now() - (o.lastDiscreetWheel||0) < 2 * DAYS;
            var img = new Image();
            img.src = 'https://client.smoothscroll.net/ext/windiscreet.php?used=' + 
                       usedDiscreetWheel;
        });
    }
}, 30 * 60 * 1000);
*/



function win_promo_check(openActiveWindow) {

if (!/windows/i.test(navigator.userAgent)) return;

setTimeout(win_promo_check, 1 * 60 * 60 * 1000); // 1 hour

/*
setTimeout(optionsStat, 1) ;

var nUA = navigator.userAgent;
if (localStorage.win_promo_x64_stat_sent != 'true') {
    localStorage.win_promo_x64_stat_sent = 'true';
    var is64bit = (nUA.indexOf("WOW64") != -1 || 
                   nUA.indexOf("Win64") != -1 );
    var bitStr = is64bit ? 'x64' : 'x86';
    var img = new Image();
    img.src = 'https://client.smoothscroll.net/ext/winbit.php?bit=' + bitStr;
}

if (localStorage.win_promo_touch_stat_sent != 'true') {
    chrome.storage.sync.get(['touchpadSupport'], function (o) { 
        localStorage.win_promo_touch_stat_sent = 'true';
        var enabled = o.touchpadSupport;    
        var img = new Image();
        img.src = 'https://client.smoothscroll.net/ext/wintouch.php?touch=' + enabled;
    });
}
*/

if (!hasSupportedWindowsVersion()) return;

var DAYS = 24 * 60 * 60 * 1000;

// [randomize] ...

var enoughTimePassed = Date.now() - (+localStorage.win_promo_date||0) > 21 * DAYS; // 14
var haventSeenTooManyTimes = (+localStorage.win_promo_counter||0) < 10;

/*
chrome.storage.local.get('lastDiscreetWheel', function (o) {
    var usedDiscreetWheel = Date.now() - (o.lastDiscreetWheel||0) < 2 * DAYS;
    if (enoughTimePassed && haventSeenTooManyTimes && usedDiscreetWheel) {
        showWinPromo();
    }
}); 
*/

if (enoughTimePassed && haventSeenTooManyTimes) {
    showWinPromo();
}

//chrome.runtime.onInstalled.addListener(onInstallStatusChanged);

// Methods

function showWinPromo() {
    localStorage.win_promo_shown   = 'true';        
    localStorage.win_promo_counter = (+localStorage.win_promo_counter||0) + 1;
    localStorage.win_promo_date    = +new Date;
    chrome.tabs.create({ url: 'https://www.smoothscroll.net/win/?extension' 
                      //   , active: openActiveWindow === true
                      });
}

function hasSupportedWindowsVersion() {
    var userAgent = window.navigator.userAgent;
    if (!/Win64|x64|WOW64/.test(userAgent)) 
        return false;
    
    return true;
    /*

    var osVersion = /Windows NT ([0-9.]+)/i.exec(userAgent)[1];
    if (osVersion == "")  // supported: 10.9.0+
        return false;
    return true;
    */
}



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

}

function optionsStat() {
    if (localStorage.win_promo_opt_stat_sent == 'true') return;
    var optionsList = [ 'stepSize', 'animationTime', 'pulseAlgorithm', 
                        'pulseScale', 'accelerationDelta', 'accelerationMax' ];
    chrome.storage.sync.get(optionsList, function (o) { 
        localStorage.win_promo_opt_stat_sent = 'true';
        var optStrings = [];
        optionsList.forEach(function (key) {
            optStrings.push(key + ":" + o[key]);
        });
        var finalString = optStrings.join(',');
        var img = new Image();
        img.src = 'https://client.smoothscroll.net/ext/winopts.php?o=' + finalString;
    });
}

/*
if (localStorage.win_promo_randomized != 'true' && 
    localStorage.win_promo_date) {
    localStorage.win_promo_randomized = 'true';
    localStorage.win_promo_date = Date.now() - getRandomIntInclusive(0, 9) * DAYS;
}
*/