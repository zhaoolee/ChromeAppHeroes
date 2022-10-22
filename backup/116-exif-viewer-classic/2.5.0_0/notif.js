//Copyright 2019 and Patent Pending. 2019-10-26 22:43:12
var recurRulesMsgURLs = ["https://dsnetx.web.app/apps/ext/msg/msg.json", "https://dsnet.bitbucket.io/apps/ext_chrome/msg/msg.json"];
var anyMsgSent = false;
var msgTimeStart = 7, msgTimeEnd = 22;
$(document).ready(function() {
});
var recurRulesMsgRetry = 0;
getMessages();
function getMessages(msgs) {
  chrome.extension.sendRequest({action:"getMsgs"}, function(response) {
    msgs = response.messages;
    if (msgs) {
      msgs = JSON.parse(msgs);
      processMessages(msgs);
    } else {
      return;
    }
  });
}
function processMessages(msgs) {
  var allAppMsges, thisAppMsg, globalAppMsg;
  var myAppId = getAppExtID();
  var isThisExcluded = false;
  allAppMsges = thisAppMsg = globalAppMsg = null;
  try {
    var excludeIds = msgs["global"]["exclude"];
    for (var id in excludeIds) {
      try {
        if (excludeIds[id] === myAppId) {
          isThisExcluded = true;
          break;
        }
      } catch (err) {
        log(err.message);
      }
    }
    if (!isThisExcluded) {
      try {
        globalAppMsg = msgs["global"];
      } catch (err$0) {
        log(err$0.message);
      }
    }
    var appMsgs = msgs["private"];
    var allAppMsges = [];
    for (var i = 0; i < appMsgs.length; i++) {
      try {
        var appIds = appMsgs[i]["ids"];
        for (var id in appIds) {
          try {
            if (appIds[id] === myAppId) {
              if (appMsgs[i] && appMsgs[i].hasOwnProperty("begin") && Number(appMsgs[i]["begin"]) > Number(dateInYyMmDd())) {
                continue;
              }
              if (appMsgs[i] && appMsgs[i].hasOwnProperty("expire") && Number(appMsgs[i]["expire"]) < Number(dateInYyMmDd())) {
                continue;
              }
              thisAppMsg = appMsgs[i];
              allAppMsges.push(thisAppMsg);
            }
          } catch (e) {
          }
        }
      } catch (err$1) {
        log(err$1.message);
      }
    }
  } catch (err$2) {
    gaEvent(gappRef, "Notif", "ProcessMessageError");
    log(err$2.message);
  }
  for (var i = 0; i < allAppMsges.length; i++) {
    postMessages(allAppMsges[i]);
  }
  if (globalAppMsg) {
    if (globalAppMsg.show) {
      setTimeout(function() {
        postMessages(globalAppMsg);
      }, anyMsgSent ? 3E3 : 10);
    }
  }
}
function postMessages(appMsg) {
  if (appMsg && (appMsg["show"] === true || appMsg["show"] === "true")) {
    var currentHour = (new Date).getHours();
    if (currentHour >= msgTimeStart && currentHour <= msgTimeEnd || TESTING) {
      var notifySelector = "#msgBox";
      if (appMsg["repeat"] === true) {
        if (appMsg.hasOwnProperty("repeatXHours")) {
          if (isValidRepeatFrequency(appMsg)) {
            finalNotification(appMsg, notifySelector);
          }
          return;
        } else {
          finalNotification(appMsg, notifySelector);
          return;
        }
      }
      var lastmsgid = dbGet("lastmsgid");
      if (lastmsgid === null || lastmsgid.indexOf(appMsg["msgid"]) < 0) {
        finalNotification(appMsg, notifySelector);
        dbAppend("lastmsgid", appMsg["msgid"]);
        if (lastmsgid && lastmsgid.length > 300) {
          dbPut("lastmsgid", appMsg["msgid"]);
        }
        anyMsgSent = true;
      } else {
        log("** Either invalid message or already notified");
      }
    }
  }
}
function isValidRepeatFrequency(appMsg) {
  try {
    var msgId = Number(appMsg["msgid"]);
    var repeatXHrs = Number(appMsg["repeatXHours"]);
    if (repeatXHrs === 0) {
      return false;
    }
    var repeatStore = dbGet("repeatStore");
    var curTime = (new Date).getTime();
    if (repeatStore) {
      repeatStore = JSON.parse(repeatStore);
    } else {
      repeatStore = {};
      repeatStore[msgId] = {last:curTime};
      dbPut("repeatStore", JSON.stringify(repeatStore));
      return true;
    }
    var msgRepeatObj = repeatStore[msgId];
    if (msgRepeatObj) {
      var msgLastTime = Number(msgRepeatObj.last);
      var minDiff = getTimeDiffInMinutes(msgLastTime);
      if (minDiff < repeatXHrs * 60) {
        return false;
      }
      repeatStore[msgId].last = curTime;
      dbPut("repeatStore", JSON.stringify(repeatStore));
      return true;
    } else {
      if (Object.keys(repeatStore).length > 50) {
        repeatStore = {};
      }
      repeatStore[msgId] = {last:curTime};
      dbPut("repeatStore", JSON.stringify(repeatStore));
      return true;
    }
  } catch (e) {
  }
  return status;
}
function getAppExtID() {
  var appid = TESTING ? "DrNNAAA" : gappId;
  return appid;
}
function escapeRegExp(string) {
  return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
function finalNotification(appMsg, elementSelector) {
  vnotify(appMsg, elementSelector);
}
function postTestMessage(msg, type, selector, position) {
  var testMsg = {"ids":["DrNNAAA"], "show":true, "type":type ? type : "success", "title":"Service Update", "msgid":"pm1411071", "msg":msg ? msg : "Thanks for trying <b>SmartList</b>. Keep us posted your feedback.", "autoclose":"0", "pos":position ? position : "top", "repeat":true};
  finalNotification(testMsg, "#msgBox");
}
function vnotify(msg, selector) {
  var notifId = Math.floor(Math.random() * 1000);
  try {
    var css = "";
    if (msg.type === "error") {
      css += "border: 1px solid #D6E9C6; background-color:#F2DEDE; color:#B94A48;";
    } else {
      if (msg.type === "warn") {
        css += "border: 1px solid #FBEED5; background-color:#FCF8E3; color:#80560E;";
      } else {
        if (msg.type === "success") {
          css += "border: 1px solid #D6E9C6; background-color:#DFF0D8; color:#134614;";
        } else {
          css += "border: 1px solid #BCE8F1; background-color:#D9EDF7; color:#1D546F;";
        }
      }
    }
    css += "font-family: Arial,Helvetica,sans-serif !important; font-size: 13px !important; padding: 5px; border-radius: 5px; margin-bottom: 2px;";
    var html = "";
    html += "<div id='vnotif" + notifId + "' class='vnotif' style='" + css + "'>";
    html += "<div class='vnotifClose' style='float: right; cursor: pointer; font-size: 20px'>&#215;</div>";
    if (msg.title) {
      html += "<div class='vnotifTitleBox'><span style='font-size: 12px;'>&#9432; </span><span class='vnotifTitle'>" + msg.title + ": <span></div>";
    }
    html += "<span class='vnotifMsg'>" + msg.msg + "</span>";
    html += "<div>";
    if ($("#msgBox").length === 0) {
      $("body").prepend("<div id=\"msgBox\" style='margin: 5px; z-index: 9999 !important; float: right !important; top: 0 !important; width: 350px; right: 0; position: absolute;'></div>");
    }
    if (isEmpty(selector)) {
      selector = "#msgBox";
    }
    $(selector).append(html);
    $(".vnotifTitleBox").attr("style", "margin-bottom: 3px; display: inline-block !important;");
    $(".vnotifTitle").attr("style", "font-weight: bold; margin-right: 5px; text-decoration: underline; display: inline-block !important;");
    $(".vnotifClose").attr("style", "float: right; font-size: 18px; top: 0; position: relative; cursor: pointer; display: inline-block !important;");
    $(".vnotifMsg").attr("style", "display: contents;");
    gaEvent(gappRef, "Notif", "FinalMessageSent");
    $(document).on("click", ".vnotifClose", function(e) {
      $(".vnotif").remove();
    });
    if (msg.autoclose) {
      var time = Number(msg.autoclose);
      if (time > 0) {
        setTimeout(function() {
          $("#vnotif" + notifId).fadeOut(1000);
        }, time);
      }
    }
  } catch (e) {
    gaEvent(gappRef, "Notif", "Failed-vnotify");
  }
}
function dateInYyMmDd() {
  var d = new Date;
  var yymmdd = d.getFullYear().toString().substr(2, 2) + "" + ("0" + (d.getMonth() + 1)).slice(-2) + "" + ("0" + d.getDate()).slice(-2);
  return yymmdd;
}
function getTimeDiffInMinutes(longTime) {
  var diff = ((new Date).getTime() - (new Date(longTime)).getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}
;
