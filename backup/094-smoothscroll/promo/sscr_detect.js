
(function () {

if (window.sscr_detect_once) return;
window.sscr_detect_once = true;

//console.log('sscr');

runAfterLoad(function () {
    // attach after 
    setTimeout(init, 1000);
});

var deltaBuffer = [-1, -1, -1]; // not divisible by 120 by default

function init() {
    var wheelEvent;
    if ('onwheel' in document.createElement('div'))
        wheelEvent = 'wheel';
    else if ('onmousewheel' in document.createElement('div'))
        wheelEvent = 'mousewheel';
    if (wheelEvent) 
        window.addEventListener(wheelEvent, wheel); 
}

function runAfterLoad(fn) {
    if (document.readyState == 'complete')
        fn();
    else 
        window.addEventListener('load', fn);
}

function notifyBackgroundPageAboutMouseWheel() {
    if (notifyBackgroundPageAboutMouseWheel.done) return;
    notifyBackgroundPageAboutMouseWheel.done = true;
    chrome.runtime.sendMessage({ to: 'bg', name: 'SS_discreteMouseWheel' });
}

function wheel(event) {
    //if (event.defaultPrevented) return true;
    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
    var deltaY = -event.wheelDeltaY || event.deltaY || 0;
    if (isDiscreteMouseWheel(deltaX, deltaY)) {
        notifyBackgroundPageAboutMouseWheel();
    }
}

function isDiscreteMouseWheel(deltaX, deltaY) {
    if (deltaX) return false; // horizontal
    // Note: in recent macOS versions delta can be zero for first few ticks
    deltaBuffer.push(Math.abs(deltaY));
    deltaBuffer.shift();
    return allDeltasDivisableBy(120) || allDeltasDivisableBy(100);
} 

// Note: always true when n=0
function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}

function allDeltasDivisableBy(divisor) {
    return (isDivisible(deltaBuffer[0], divisor) &&
            isDivisible(deltaBuffer[1], divisor) &&
            isDivisible(deltaBuffer[2], divisor));
}

})();



      