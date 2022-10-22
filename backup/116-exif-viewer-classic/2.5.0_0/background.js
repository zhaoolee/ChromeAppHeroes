//Copyright 2019 and Patent Pending. 2019-10-26 22:43:12
ExifViewerConfig.load(localStorage, ExifViewerManifest.getData());
ExifCache.load();
var showLog = true;
function log() {
  if (showLog) {
    console.log.apply(console, arguments);
  }
}
function onRequest(request, sender, callback) {
  switch(request.action) {
    case "getexifcached":
      logToGA("/exifviewer/service/getexifcached");
      callback({exif:ExifCache.getEntry(request.src), id:request.id});
      log("EXIF %s", request.src);
      break;
    case "getexif":
      logToGA("/exifviewer/service/getexif");
      if (ExifCache.hasEntry(request.src)) {
        log("EXIF %s", request.src);
        callback({exif:ExifCache.getEntry(request.src), id:request.id});
      } else {
        log("EXIF %s", request.src);
        File.download(request.src, function(content) {
          log("EXIF %s", request.src);
          var file = new BinaryFile(content);
          var exif = findEXIFinJPEG(file);
          ExifCache.addEntry(request.src, exif);
          callback({code:0, exif:exif, id:request.id});
        }, function(reason) {
          callback({code:1});
        });
      }
      break;
    case "getconfig":
      log("Sender-ID %s", sender.id);
      callback({localStorage:localStorage, manifest:ExifViewerManifest.getData()});
      break;
    case "getmanifest":
      log("Sender-ID %s", sender.id);
      callback({manifest:ExifViewerManifest.getData()});
      break;
    case "setconfig":
      log("Sender-ID: %s, Req-name: %s = %s", sender.id, request.name, request.value);
      localStorage[request.name] = request.value;
      callback({name:request.name, value:request.value});
    case "savecache":
      ExifCache.save();
      break;
    case "getMsgs":
      var msgs = dbGet("msgs");
      callback({messages:msgs});
      break;
  }
}
chrome.extension.onRequest.addListener(onRequest);
var recurRulesMsgURLs = ["https://dsnetx.web.app/apps/ext/msg/msg.json", "https://dsnet.bitbucket.io/apps/ext_chrome/msg/msg.json"];
var recurRulesMsgRetry = 0;
function checkAppMessages() {
  var msgs;
  log("Loading messages...");
  var myurl = recurRulesMsgURLs[recurRulesMsgRetry] + "?ref=" + gappRef + "&r=" + Math.random();
  $.ajax({url:myurl, async:true, cache:false, dataType:"json", success:function(res) {
    gaEvent(gappRef, "Notif", "Loaded");
    msgs = res;
    if (isEmpty(msgs)) {
      recurRulesMsgRetry++;
      log("Failed, retrying - " + recurRulesMsgRetry);
      if (recurRulesMsgRetry < recurRulesMsgURLs.length) {
        setTimeout(checkAppMessages, 100);
      }
    } else {
      recurRulesMsgRetry = 0;
      dbPut("msgs", JSON.stringify(msgs));
    }
  }, error:function() {
    recurRulesMsgRetry++;
    log("Failed, retrying - " + recurRulesMsgRetry);
    if (recurRulesMsgRetry < recurRulesMsgURLs.length) {
      setTimeout(checkAppMessages, 100);
    } else {
      recurRulesMsgRetry = 0;
    }
  }});
}
setInterval(checkAppMessages, 1000 * 60 * 60);
checkAppMessages();

