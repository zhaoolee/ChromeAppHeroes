//Copyright 2019 and Patent Pending. 2019-10-26 22:43:13
function logToGA(path) {
  if (window.hasOwnProperty("_gat")) {
    _gat._getTrackerByName()._trackPageview(path);
  }
}
function isWindows() {
  return navigator.userAgent.toLowerCase().indexOf("windows") > -1;
}
if (isWindows()) {
  var _gaq = _gaq || [];
  _gaq.push(["_setAccount", "UA-17925037-1"]);
  _gaq.push(["_setCustomVar", 1, "Version", ExifViewerManifest.getData().version, 2]);
  _gaq.push(["_trackPageview"]);
  (function() {
    var ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src = "serviceasset/ga.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ga, s);
  })();
}
;
