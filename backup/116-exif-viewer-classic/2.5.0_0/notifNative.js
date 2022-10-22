//Copyright 2019 and Patent Pending. 2019-10-26 22:43:11
var myNotificationID = null;
var redirectURL = null;
function natitNativeTest() {
  var msg = {title:gappTitle ? gappTitle : "Information!", iconUrl:"icon.jpg", message:"This is notification details and description", imageUrl:"http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png", link:"http://stackoverflow.com/a/13328397/1269037"};
  nativeNotify(msg);
}
function nativeNotifyMsg(msg) {
  var msg = {message:msg};
  nativeNotify(msg);
}
function nativeNotify(msgData) {
  if (!msgData.title) {
    msgData.title = gappTitle ? gappTitle : "Information!";
  }
  msgData.iconUrl = msgData.iconUrl ? msgData.iconUrl : "icon.jpg";
  if (msgData.link) {
    redirectURL = msgData.link;
  }
  nativeNotifType2(msgData);
}
function nativeNotifyFromUIMsg(msgUI) {
  var msg = {};
  if (msgUI.msg) {
    msg.message = msgUI.msg;
    if (msgUI.title) {
      msg.title = msgUI.title;
    }
    if (msgUI.imageUrl) {
      msg.imageUrl = msgUI.imageUrl;
    }
    if (msgUI.link) {
      msg.link = msgUI.link;
    }
    nativeNotify(msg);
  }
}
function nativeNotifType1(msgData) {
  var notification = new Notification(msgData.message, {tag:"msg1"});
  notification.onclick = function() {
    if (redirectURL) {
      window.open(redirectURL);
      window.focus();
    }
  };
}
function nativeNotifType11() {
  var notification = new Notification("Notification title", {icon:"http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png", body:"Hey there! You've been notified!" + htmlMsg});
}
function nativeNotifType2(msgData) {
  try {
    var opt = {type:msgData.imageUrl ? "image" : "basic", iconUrl:msgData.iconUrl, title:msgData.title, message:msgData.message};
    if (msgData.imageUrl) {
      opt.imageUrl = msgData.imageUrl;
    }
    if (msgData.link) {
      opt.buttons = [{title:"Open It"}, {title:"Cancel"}];
    }
    chrome.notifications.create("name-for-notification", opt, function(id) {
      myNotificationID = id;
    });
    gaEvent(gappRef, gaVals.label.NotifNative, gaVals.value.shown);
  } catch (e) {
    gaEvent(gappRef, gaVals.label.NotifNative, gaVals.value.failedProcess);
  }
}
function nativeNotifType3() {
  try {
    var opt = {iconUrl:"http://www.google.com/favicon.ico", type:"list", title:"Primary Title", message:"Primary message to display", priority:1, items:[{title:"Item1", message:"This is item 1."}, {title:"Item2", message:"This is item 2."}, {title:"Item3", message:"This is item 3."}]};
    chrome.notifications.create("notify1", opt, function() {
      console.log("created!");
    });
  } catch (e) {
  }
}
chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
  if (notifId === myNotificationID) {
    if (btnIdx === 0) {
      if (redirectURL) {
        window.open(redirectURL);
        window.focus();
      }
    } else {
      if (btnIdx === 1) {
        chrome.notifications.clear(notifId);
      }
    }
  }
});
chrome.notifications.onClosed.addListener(function() {
  saySorry();
});
function saySorry() {
}
;
