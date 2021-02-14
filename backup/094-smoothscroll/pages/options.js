
/**
 * Options page logic.
 */
(function(window, undefined){

var isOpera = /OPR/.test(navigator.userAgent);
var isLinux = /Linux/i.test(navigator.userAgent);
var isWin   = /windows/i.test(navigator.userAgent);
var isMac   = /mac/i.test(navigator.userAgent);

if (isWin) 
  document.documentElement.classList.add('win');
else if (isMac)
  document.documentElement.classList.add('mac'); 

/**
 * List of available options
 */
var optionsList = [
  'animationTime',
  'stepSize',
  'arrowScroll',
  'middleMouse',
  'accelerationMax',
  'accelerationDelta',
  'pulseAlgorithm',
  'pulseScale',
  'keyboardSupport',
  'touchpadSupport',
  'excluded',
  'fixedBackground',
  'reverseDirection'
];

var options = {};

function byId(id) { return document.getElementById(id); }
function byClass(cname) { return document.getElementsByClassName(cname); }
function byTag(tag,base) { return (base||document).getElementsByTagName(tag||'*'); }

function isNodeName(el, tag) {
    return el.nodeName.toLowerCase() === tag.toLowerCase();
}

function show(elem, newop) {
    elem.style.display = "block";
    elem.style.webkitTransition = "opacity 0.2s ease-in-out";
    setTimeout(function(){
        elem.style.opacity = (newop || 1);
    }, 0);
}

function hide(elem, newop) {
    elem.style.webkitTransition = "opacity 1s ease-in-out";
    elem.style.opacity = (newop || 0);
    setTimeout(function(){
        elem.style.display = "none";
    }, 1000);
}

function isCheckbox(key) {
  var re = /^(?:keyboardSupport|touchpadSupport|middleMouse|pulseAlgorithm|fixedBackground|reverseDirection)$/;
  return re.test(key);
}

function init() {
  chrome.storage.sync.get(optionsList, initWithOptions);
}

/**
 * Fills up the form with the saved values from local storage.
 */
function initWithOptions(optionsSynced) {

    options = optionsSynced;

    // settings were updated -> show dialog
    if (localStorage.saved == 'true') {
        var dialog  = byClass('dialog')[0];
        show(dialog, 0.9);
        setTimeout(function () {
            hide(dialog);
        }, 3000);
    }

    // updated complete
    localStorage.saved = 'false';
        
    // fill the form fields from storage
    for (var key in options) {
      if (isCheckbox(key)) {
          byId(key).checked = options[key];
      } else if (options[key]) {
          byId(key).value = options[key];
      }
    }
}

/**
 * Saves the values from the form to local storage.
 */
function save() {

    var i, key, opt, elem, error, options = {};

    // save options to the local storage
    optionsList.forEach(function(key, i) {
        // <input type="text"> and <textarea>
        if (!isCheckbox(key)) {
            elem = byId(key);
            opt = elem.value;
            // every <input> 
            if (isNodeName(elem, "input")) {
              // should be a number
              opt = parseFloat(opt, 10);
              if (isNaN(opt)) {
                  error = "Numeric Values Only!";
                  return; // stop iteration
               }
            }
            options[key] = opt;
        } else { // checkbox
            options[key] = byId(key).checked;
        }
    });

    // update message
    if (!error) {
        chrome.storage.sync.set(options, function(){
            localStorage.saved = 'true';
            reload();   
        });
    }
    // error message
    else {
        alert(error);
    } 
}

function get_manifest(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText));
    };
    xhr.open('GET', '../manifest.json', true);
    xhr.send(null);
}

get_manifest(function (manifest) {
    version = manifest.version;
    byId("version").innerHTML = version;
});

function reload() {
    window.location.reload();
}


var profiles = {

  '_custom': {
    'animationTime': 160,
    'stepSize': 120,
    'pulseAlgorithm': 'true',
    'pulseScale': 4
  },

  '_default': {
    'animationTime': 400,
    'stepSize': 100,
    'pulseAlgorithm': 'true',
    'pulseScale': 4
  },

  '_iphone': {
    'animationTime': 600,
    'stepSize': 120,
    'pulseAlgorithm': 'true',
    'pulseScale': 3
  },
  
  '_opera': {
    'animationTime': 120,
    'stepSize': 120,
    'pulseAlgorithm': 'false'
  },
  
  '_ie9': {
    'animationTime': 60,
    'stepSize': 120,
    'pulseAlgorithm': 'false'
  }
};

// TODO: merge with init
function setProfile(profile) {

    if ('custom' == profile){
      init();
      return;
    }  

    profile = profiles['_'+profile];

    // set
    for (var key in profile) {
        if (isCheckbox(key)) {
            byId(key).checked = (profile[key] == "true");
        } else if (options[key]) {
            byId(key).value = profile[key];
        }
    };
}

// Restores select box state to saved value from storage.
// function restore_options() {}

function generateTest() {
    var test = byId('test');
    var el = byTag('div', test)[0];
    for (var i = 5; i--;) {
      test.appendChild(el.cloneNode(true));
    }
}

byId('profiles').onclick = function(e) {
  if (e.target.id && e.target.nodeName == 'BUTTON') {
    setProfile(e.target.id);
  }
};

byId('save').onclick = save;


function initOpera() {
  var operaMainURL   = 
    'https://addons.opera.com/en/extensions/details/smoothscroll-3/';
  var operaReviewURL = 
    operaMainURL + '#feedback-container';
  [].forEach.call(document.querySelectorAll('.link-ext'), function (link) {
    link.href = operaMainURL;
  });
  [].forEach.call(document.querySelectorAll('.link-review'), function (link) {
    link.href = operaReviewURL;
  });
}

function initLinux() {
  document.documentElement.classList.add('linux');
}

if (isOpera) initOpera();
if (isLinux) initLinux();

// public interface
init();
window.addEventListener("DOMContentLoaded", generateTest, false);
window.reload = reload;
window.save = save;
window.setProfile = setProfile;

})(window);
