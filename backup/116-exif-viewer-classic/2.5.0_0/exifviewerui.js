//Copyright 2019 and Patent Pending. 2019-10-26 22:43:12
ExifViewerUI = {};
ExifViewerUI._gpsTemplate = '<a title="' + chrome.i18n.getMessage("ClickToCheckMapInGoogleMaps") + '" class="exifviewerui-gps-link" href="http://maps.google.com/?q={ExifViewer.GPS.Lat},{ExifViewer.GPS.Long}" target="_blank" mapsrc="http://maps.google.com/maps/api/staticmap?markers=color:red|{ExifViewer.GPS.Lat},{ExifViewer.GPS.Long}&center={ExifViewer.GPS.Lat},{ExifViewer.GPS.Long}&size={ExifViewer.Image.Width}x{ExifViewer.Image.Height}&zoom=14&sensor=false">&nbsp;</a>';
ExifViewerUI.CLOSE_LINK = '<a href="javascript:void(0);" title="Close" class="exifviewerui-close-link">Close</a>';
ExifViewerUI.hasView = function(id) {
  return document.getElementById(ExifViewerUI.templateLitePrefix + ExifViewer.getExifIdById(id)) != null;
};
ExifViewerUI.createView = function(id) {
  var element = document.getElementById(id);
  var object = $(element);
  var exifId = object.attr("exifid");
  switch(object.length) {
    case 1:
      $("body").append(this._getTemplateLite(object));
      ev.log("Added view for %s", id);
      break;
    case 0:
      ev.error("%s not found", id);
      break;
    default:
      ev.error("%s can only have one at most", id);
      break;
  }
};
ExifViewerUI.removeView = function(id) {
  $("#" + ExifViewerUI.templateLitePrefix + document.getElementById(id).getAttribute("exifid")).remove();
};
ExifViewerUI.parseTemplate = function(template, data) {
  var result = template;
  var varList = template.match(/\{([\w\.]+)\}/ig);
  if (varList) {
    var n = varList.length;
    for (var i = 0; i < n; i++) {
      var varName = varList[i];
      var key = varName.replace("{", "").replace("}", "");
      result = result.replace(varName, data.hasOwnProperty(key) ? data[key] : chrome.i18n.getMessage("ValueNotFound"));
    }
  }
  return result;
};
ExifViewerUI.updateView = function(id, exif, code) {
  var unit = "px";
  var element = document.getElementById(id);
  var image = $(element);
  var imageOffset = image.offset();
  var imageWidth = image.width();
  var imageHeight = image.height();
  var exifId = image.attr("exifid");
  var template = ExifViewerConfig.getEntry("templateLite");
  var formatted;
  if (!code) {
    code = 0;
  }
  if (code == 0) {
    if (exif === false) {
      formatted = chrome.i18n.getMessage("ExifNotFound");
    } else {
      if (exif === null) {
        formatted = chrome.i18n.getMessage("LoadingExif");
      } else {
        exif["ExifViewer.Image.Width"] = imageWidth;
        exif["ExifViewer.Image.Height"] = imageHeight;
        formatted = ExifViewerUI.parseTemplate(template, exif);
      }
    }
  } else {
    formatted = chrome.i18n.getMessage("ImageLoadFailure");
  }
  if (exif) {
    if (exif.hasOwnProperty("ExifViewer.GPS.Lat") && exif.hasOwnProperty("ExifViewer.GPS.Long")) {
      formatted += ExifViewerUI.parseTemplate(ExifViewerUI._gpsTemplate, exif);
    }
  }
  var lite = $("#" + ExifViewerUI.templateLitePrefix + exifId);
  lite.html(formatted);
  lite.append(ExifViewerUI.CLOSE_LINK);
  lite.css("max-width", imageWidth - 8 + unit);
  lite.find("a.exifviewerui-gps-link").mouseenter(ExifViewerUI.gps_mouseEnterHandler);
  lite.find("a.exifviewerui-gps-link").mouseleave(ExifViewerUI.gps_mouseLeaveHandler);
  lite.find("a.exifviewerui-close-link").click(function(e) {
    lite.css("visibility", "hidden");
  });
  ev.log("Updated view for %s", exifId);
};
ExifViewerUI._getTemplateFull = function(object) {
};
ExifViewerUI.templateLitePrefix = "exifviewerui-template-lite-for-";
ExifViewerUI._getTemplateLite = function(object) {
  var unit = "px";
  var id = object.attr("id");
  var exifId = object.attr("exifid");
  var offset = object.offset();
  var width = object.width();
  var height = object.height();
  var templateString = '<div class="exifviewerui-template-lite"></div>';
  var template = $(templateString);
  template.html(chrome.i18n.getMessage("LoadingImage"));
  template.append(ExifViewerUI.CLOSE_LINK);
  template.find("a.exifviewerui-close-link").click(function(e) {
    lite.css("visibility", "hidden");
  });
  template.css("top", offset.top + unit);
  template.css("left", offset.left + unit);
  template.css("max-width", width - 8 + unit);
  template.attr("id", ExifViewerUI.templateLitePrefix + exifId);
  template.css("display", "none");
  object.mouseover(ExifViewerUI.image_mouseOverHandler);
  object.mouseout(ExifViewerUI.image_mouseOutHandler);
  template.mouseenter(ExifViewerUI.viewLite_mouseOverHandler);
  template.mouseleave(ExifViewerUI.viewLite_mouseOutHandler);
  return template;
};
ExifViewerUI.gps_mouseEnterHandler = function(e) {
  var target = e.currentTarget;
  var gpsMap = $("#exifviewerui-gps-map");
  if (gpsMap.length == 0) {
    gpsMap = $('<img exifviewerdisabled="true" id="exifviewerui-gps-map" style="position: absolute; z-index: 99998"/>');
    $(document.body).append(gpsMap);
  }
  var lite = $(target).parent();
  var offset = lite.offset();
  var width = lite.width();
  var height = lite.height();
  gpsMap.css("left", offset.left + "px");
  gpsMap.css("top", offset.top + "px");
  var src = target.getAttribute("mapsrc");
  gpsMap.attr("src", src);
  gpsMap.stop().fadeTo(200, 1);
};
ExifViewerUI.gps_mouseLeaveHandler = function(e) {
  var gpsMap = $("#exifviewerui-gps-map");
  gpsMap.stop().fadeTo(200, 0, function() {
    gpsMap.css("display", "none");
  });
};
ExifViewerUI.isEmpty = function(object) {
  var result = true;
  if (object.constructor == Object) {
    for (var i in object) {
      result = false;
      break;
    }
  }
  return result;
};
ExifViewerUI.viewLite_mouseOverHandler = function(e) {
  var target = e.currentTarget;
  var lite = $(target);
  lite.find("a.exifviewerui-gps-link").css("opacity", 1);
  lite.stop().css("display", "block").fadeTo(200, .66);
};
ExifViewerUI.viewLite_mouseOutHandler = function(e) {
  var target = e.currentTarget;
  var lite = $(target);
  lite.find("a.exifviewerui-gps-link").css("opacity", 1);
  lite.stop().fadeTo(200, 0, function() {
    lite.css("display", "none");
  });
};
ExifViewerUI.image_mouseOverHandler = function(e) {
  var unit = "px";
  var image = $(e.target);
  var imageOffset = image.offset();
  var imageWidth = image.width();
  var lite = $("#" + ExifViewerUI.templateLitePrefix + e.target.getAttribute("exifid"));
  lite.css("left", imageOffset.left + unit);
  lite.css("top", imageOffset.top + unit);
  lite.find("a.exifviewerui-gps-link").css("opacity", 1);
  lite.stop().css("display", "block").fadeTo(200, .66);
};
ExifViewerUI.image_mouseOutHandler = function(e) {
  var lite = $("#" + ExifViewerUI.templateLitePrefix + e.target.getAttribute("exifid"));
  lite.find("a.exifviewerui-gps-link").css("opacity", 1);
  lite.stop().fadeTo(200, 0, function() {
    lite.css("display", "none");
  });
};
ExifViewerUI.createNotifyVersionView = function() {
  var object = $('<div id="notifyVersionView" style="z-index: 99999; margin: 0; background: #F2B600; border: 1px solid #CC9900; color: #4F3C00; padding: 8px; font: 12px/12px Arial, sans-serif; position: absolute; left:0; right: 0; "><div style="float: left; ">' + chrome.i18n.getMessage("WorkingNotify", ExifViewerConfig.manifest.version) + "</div>" + '<div style="float: right;"><a href="' + chrome.extension.getURL("options.html") + '">' + chrome.i18n.getMessage("GotoOptionsPage") + "</a></div>" + 
  '<br clear="both"/></div>');
  $(document.body).prepend(object);
  object.slideUp(1).slideDown(800).delay(5000).slideUp(800, ExifViewerUI.removeNotifyVersionView);
};
ExifViewerUI.removeNotifyVersionView = function() {
  $("#notifyVersionView").remove();
};

