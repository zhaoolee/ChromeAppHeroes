//Copyright 2019 and Patent Pending. 2019-10-26 22:43:12
ExifViewerConfig.load(localStorage, ExifViewerManifest.getData());
ExifCache.load();
$(document).ready(function(e) {
  $("#options").tabs({selected:0});
  restoreOptions();
  $("#general-options-form").submit(function(e) {
    logToGA("/exifviewer/options/general/save");
    localStorage["templateLite"] = $("#template-lite").val();
    localStorage["minImageWidth"] = $("#min-image-width").val();
    localStorage["minImageHeight"] = $("#min-image-height").val();
    localStorage["autoParse"] = $("#auto-parse").attr("checked");
    showMessage("Save success");
    return false;
  });
  $("#general-options-form .reset-button").click(function(e) {
    resetGeneralOptions();
    restoreOptions();
    return false;
  });
  $("#cache-options-form").submit(function(e) {
    logToGA("/exifviewer/options/cache/save");
    var cacheSize = Number($("#cache-size").val());
    if (cacheSize == 0) {
      ExifCache.clear();
    } else {
      if (cacheSize > 200) {
        cacheSize = 200;
        $("#cache-size").val(cacheSize);
      }
    }
    localStorage["cacheSize"] = cacheSize;
    showMessage("Save success");
    return false;
  });
  $("#cache-options-form .reset-button").click(function(e) {
    resetCacheOptions();
    restoreOptions();
    return false;
  });
  $("#show-cache-button").click(function(e) {
    logToGA("/exifviewer/options/cache/show");
    $("#cache-list").empty();
    var n = ExifCache.getCacheCount();
    var cacheList = $("#cache-list");
    if (n > 0) {
      var template = '<li><a href="{url}" target="_blank">{url}</a></li>';
      var ol = $('<ol style="width: 520px; overflow-x: scroll; "/>');
      cacheList.append(ol);
      for (var i = 0; i < n; i++) {
        var url = ExifCache.getEntryUrlByIndex(i);
        var li = $(template.replace(/\{url\}/g, url));
        ol.append(li);
      }
    }
    if (n == 0) {
      cacheList.html("No cache");
    }
    return false;
  });
  $("#clear-cache-button").click(function(e) {
    logToGA("/exifviewer/options/cache/clear");
    $("#cache-list").empty();
    ExifCache.clear();
    showMessage("Clear cache success");
    return false;
  });
  $("#filter-options-form").submit(function(e) {
    logToGA("/exifviewer/options/filter/save");
    showMessage("Save success");
    localStorage["filterKeywords"] = JSON.stringify($("#filter-keywords").val().replace("\r\n", "\n").split("\n"));
    return false;
  });
  $("#filter-options-form .reset-button").click(function(e) {
    logToGA("/exifviewer/options/filter/reset");
    resetFilterOptions();
    restoreOptions();
    return false;
  });
});
function showMessage(message) {
  var object = $("#save-success");
  object.text(message).fadeIn(100).delay(800).fadeOut(1000).css("margin-left", -object.width() * .5);
}
function restoreOptions() {
  $("#template-lite").val(ExifViewerConfig.getEntry("templateLite"));
  $("#min-image-width").val(ExifViewerConfig.getEntry("minImageWidth"));
  $("#min-image-height").val(ExifViewerConfig.getEntry("minImageHeight"));
  $("#cache-size").val(ExifViewerConfig.getEntry("cacheSize"));
  $("#auto-parse").attr("checked", ExifViewerConfig.getBoolean("autoParse"));
  $("#filter-keywords").val(ExifViewerConfig.getObject("filterKeywords").join("\n"));
}
function resetCacheOptions() {
  logToGA("/exifviewer/options/cache/reset");
  delete localStorage["cacheSize"];
  showMessage("Reset success");
}
function resetFilterOptions() {
  logToGA("/exifviewer/options/filter/reset");
  delete localStorage["filterKeywords"];
}
function resetGeneralOptions() {
  logToGA("/exifviewer/options/general/reset");
  delete localStorage["templateLite"];
  delete localStorage["minImageWidth"];
  delete localStorage["minImageHeight"];
  delete localStorage["autoParse"];
  showMessage("Reset success");
}
;
