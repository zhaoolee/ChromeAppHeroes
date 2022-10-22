//Copyright 2019 and Patent Pending. 2019-10-26 22:43:12
var logGA = new logger("tracking.js");
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-17925037-1"]);
function gaPageView() {
  if (!TESTING) {
    _gaq.push(["_trackPageview"]);
  } else {
    logGA.info("GA# _trackPageview");
  }
}
function gaEvent(action, label) {
  if (!TESTING) {
    _gaq.push(["_trackEvent", action, label]);
  } else {
    logGA.info("GA-TESTING#  " + [action, label]);
  }
}
function gaEvent(action, label, labelValue) {
  labelValue = "" + labelValue;
  label = "" + label;
  if (!TESTING) {
    _gaq.push(["_trackEvent", action, label, labelValue]);
  } else {
    logGA.info("GA-TESTING#  " + [action, label, labelValue]);
  }
}
var gaVals = {"actions":{"comments":"Won't be useful, because its default it GAPPID", "rules":"Rules", "rules":"Notif", "rules":"Other"}, "label":{"Enabled":"Enabled", "Disabled":"Disabled", "RtData":"RtData", "RulesCheck":"RulesCheck", "RulesData":"RulesData", "NotifUI":"NotifUI", "NotifNative":"NotifNative", "NotifMktg":"NotifMktg", "rules":"Other", "exif":"Exif"}, "value":{"success":"Success", "failedURL":"FailedURL", "failedProcess":"FailedProcess", "failedAll":"FailedAll", "loaded":"Loaded", 
"processed":"Processed", "shown":"Shown", "closed":"Closed", "rules":"Other", "popupFine":"PopUp-Fine", "popupError":"PopUp-Error"}};

