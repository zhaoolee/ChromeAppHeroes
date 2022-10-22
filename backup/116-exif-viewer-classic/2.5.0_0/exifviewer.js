//Copyright 2019 and Patent Pending. 2019-10-26 22:43:12
var ExifViewer = {};
var ev = ExifViewer;
ExifViewer.LOG_LOG = 1;
ExifViewer.LOG_ERROR = 2;
ExifViewer.logLevel = 0;
ExifViewer.error = function() {
  if (ExifViewer.logLevel & ExifViewer.LOG_ERROR == ExifViewer.LOG_ERROR) {
    arguments[0] = "[EV] " + arguments[0];
    console.error.apply(console, arguments);
  }
};
ExifViewer.log = function() {
  if (ExifViewer.logLevel & ExifViewer.LOG_LOG == ExifViewer.LOG_LOG) {
    arguments[0] = "[EV] " + arguments[0];
    console.log.apply(console, arguments);
  }
};
ExifViewer._absoluteUrlConvertProxy = null;
ExifViewer.getAbsoluteUrl = function(url) {
  ExifViewer._absoluteUrlConvertProxy.href = url;
  return ExifViewer._absoluteUrlConvertProxy.href;
};
ExifViewer._imgIndex = 0;
ExifViewer._img_eachHandler1 = function(index, element) {
  var hasId = element.id && element.id.length != 0;
  if (hasId == false) {
    element.id = "exifviewer-img-" + index;
  }
  element.setAttribute("exifid", ExifViewerUtil.crc32(element.src));
  element.setAttribute("oldsrc", element.src);
  ev.log("Index(%s),Element.id(%s),Element.src(%s),", index, element.id, element.src);
  ExifViewer._imgIndex = index;
  ExifViewerUI.createView(element.id);
};
ExifViewer._img_exifviewerimageonloadhandler = function(e) {
  var element = e.target;
  ev.log("element.id: %s", element.id);
  var object = $(element);
  if (object.width() >= ExifViewerConfig.getEntry("minImageWidth") && object.height() >= ExifViewerConfig.getEntry("minImageHeight")) {
    ExifViewer.beginGetExif(element.id);
  } else {
    ExifViewerUI.removeView(element.id);
  }
};
ExifViewer._img_loadHandler = function(e) {
  $(e.target).trigger("exifviewer.image.onload");
};
ExifViewer._img_eachHandler2 = function(index, element) {
  if (element.complete) {
    $(element).trigger("exifviewer.image.onload");
  }
};
ExifViewer.init = function() {
  var keywords = ExifViewerConfig.getObject("filterKeywords");
  if (keywords) {
    for (var i in keywords) {
      var keyword = keywords[i];
      ev.log(keyword);
      if (location.href.indexOf(keyword) > -1) {
        return;
      }
    }
  }
  $(document.body).append('<a style="display: none; " id="exifview-absolute-url-convert-proxy" href="dummy"></a>');
  ExifViewer._absoluteUrlConvertProxy = document.getElementById("exifview-absolute-url-convert-proxy");
  if (ExifViewerConfig.getBoolean("autoParse")) {
    var object = $("img");
    object.each(ExifViewer._img_eachHandler1);
    object.one("exifviewer.image.onload", ExifViewer._img_exifviewerimageonloadhandler);
    object.one("load", ExifViewer._img_loadHandler);
    object.each(ExifViewer._img_eachHandler2);
  }
  $(document.body).mouseover(function(e) {
    if (e.target.constructor == HTMLImageElement && e.target.getAttribute("exifviewerdisabled") != "true") {
      var element = e.target;
      var hasId = element.id && element.id.length != 0;
      if (hasId) {
        if (ExifViewerUI.hasView(element.id) == false) {
          var object = $(element);
          ExifViewer._img_eachHandler1(ExifViewer._imgIndex + 1, element);
          object.one("exifviewer.image.onload", ExifViewer._img_exifviewerimageonloadhandler);
          object.one("load", ExifViewer._img_loadHandler);
          ExifViewer._img_eachHandler2(0, element);
          var mouseOverEvent = $.Event("mouseover");
          mouseOverEvent.target = element;
          ExifViewerUI.lastEvent = mouseOverEvent;
          ExifViewerUI.image_mouseOverHandler(mouseOverEvent);
        }
      } else {
        var object = $(element);
        ExifViewer._img_eachHandler1(ExifViewer._imgIndex + 1, element);
        object.one("exifviewer.image.onload", ExifViewer._img_exifviewerimageonloadhandler);
        object.one("load", ExifViewer._img_loadHandler);
        ExifViewer._img_eachHandler2(0, element);
        var mouseOverEvent = $.Event("mouseover");
        mouseOverEvent.target = element;
        ExifViewerUI.lastEvent = mouseOverEvent;
        ExifViewerUI.image_mouseOverHandler(mouseOverEvent);
      }
    }
  });
};
ExifViewer.getExifIdById = function(id) {
  var element = document.getElementById(id);
  if (element.src != element.getAttribute("oldsrc")) {
    ExifViewerUI.removeView(id);
    element.setAttribute("exifid", ExifViewerUtil.crc32(element.src));
  }
  return document.getElementById(id).getAttribute("exifid");
};
ExifViewer.getExifCached = function(id) {
  chrome.extension.sendRequest({action:"getexifcached", src:ExifViewer.getAbsoluteUrl(document.getElementById(id).src), id:id}, function(response) {
    if (response.exif !== null) {
      ExifViewer.endGetExif(response.id, response.exif);
    }
  });
};
ExifViewer.beginGetExif = function(id) {
  ExifViewerUI.updateView(id, null, 0);
  ev.log("Requesting for %s EXIF", id);
  chrome.extension.sendRequest({action:"getexif", src:ExifViewer.getAbsoluteUrl(document.getElementById(id).src), id:id}, function(response) {
    ExifViewer.endGetExif(response.id, response.exif, response.code);
  });
};
ExifViewer.endGetExif = function(id, exif, code) {
  ExifViewerUI.updateView(id, exif, code);
  ev.log("Received EXIF \u200b\u200bfor %s", id, exif);
};
ExifViewer.notifyVersion = function() {
  if (ExifViewerConfig.manifest.version != ExifViewerConfig.getEntry("versionInstalled")) {
    ExifViewerUI.createNotifyVersionView();
    ExifViewerConfig.setEntry("versionInstalled", ExifViewerConfig.manifest.version);
  }
};
ExifViewerConfig.onload = function() {
  ExifViewer.init();
  ExifViewer.notifyVersion();
};
ExifViewerConfig.load();
$(window).unload(function(e) {
  chrome.extension.sendRequest({action:"savecache"}, function(response) {
  });
});
ev.log("Infused exifviewer.js (%s)", location.href);

