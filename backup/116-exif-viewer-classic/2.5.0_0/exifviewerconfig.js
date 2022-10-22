//Copyright 2019 and Patent Pending. 2019-10-26 22:43:11
ExifViewerConfig = {localStorage:{}, onload:function() {
}, manifest:null};
ExifViewerConfig.getManifest = function() {
  return ExifViewerConfig.manifest;
};
ExifViewerConfig.getNumber = function(name) {
  return Number(ExifViewerConfig.getEntry(name));
};
ExifViewerConfig.getBoolean = function(name) {
  var value = ExifViewerConfig.getEntry(name);
  if (value.constructor != Boolean) {
    var result = false;
    switch(value) {
      case 1:
      case "1":
      case "true":
      case "yes":
        result = true;
        break;
    }
  } else {
    result = value;
  }
  return result;
};
ExifViewerConfig.getObject = function(name) {
  var result = ExifViewerConfig.getEntry(name);
  if (result) {
    return JSON.parse(result);
  }
  return result;
};
ExifViewerConfig.getEntry = function(name) {
  var result;
  if (ExifViewerConfig.localStorage.hasOwnProperty(name)) {
    result = ExifViewerConfig.localStorage[name];
  } else {
    result = ExifViewerConfig[name];
  }
  return result;
};
ExifViewerConfig.setEntry = function(name, value) {
  chrome.extension.sendRequest({action:"setconfig", name:name, value:value}, function(response) {
    ExifViewerConfig.localStorage[response.name] = response.value;
  });
};
ExifViewerConfig.load = function(localStorage, manifest) {
  if (localStorage && manifest) {
    ExifViewerConfig.localStorage = localStorage;
    ExifViewerConfig.manifest = manifest;
    ExifViewerConfig.onload();
  } else {
    chrome.extension.sendRequest({action:"getconfig"}, function(response) {
      ExifViewerConfig.load(response.localStorage, response.manifest);
    });
  }
};
ExifViewerConfig.templateLite = chrome.i18n.getMessage("DefaultTemplateLite");
ExifViewerConfig.minImageWidth = 200;
ExifViewerConfig.minImageHeight = 200;
ExifViewerConfig.cacheSize = 100;
ExifViewerConfig.autoParse = false;
ExifViewerConfig.versionInstalled = "0.0";
ExifViewerConfig.filterKeywords = '["maps.google.com","cn.bing.com/ditu/"]';

