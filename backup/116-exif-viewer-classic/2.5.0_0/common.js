//Copyright 2019 and Patent Pending. 2019-10-26 22:43:13
var logCommon = null;
var TESTING = false;
var manifestVersion = replaceAll(chrome.runtime.getManifest().version, ".", "");
var gappId = "Bk101";
var gappTitle = "ExifAndrey";
var gappRef = gappId + "-" + gappTitle + "-" + manifestVersion;
var gappType = "GappType";
$(document).ready(function() {
  logCommon = new logger("commons.js");
});
function log(msg) {
  var logTime = new Date;
  logTime = logTime.getHours() + ":" + logTime.getMinutes() + ":" + logTime.getSeconds();
  if (TESTING) {
    console.info(logTime + "# " + msg);
  }
}
function escapeRegExp(string) {
  return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
function isEmpty(value) {
  return value == null || value.length === 0;
}
function randomNumber(minimum, maximum) {
  return Math.round(Math.random() * (maximum - minimum) + minimum);
}
function dateInYyMmDd() {
  var d = new Date;
  var yymmdd = d.getFullYear().toString().substr(2, 2) + "" + ("0" + (d.getMonth() + 1)).slice(-2) + "" + ("0" + d.getDate()).slice(-2);
  return yymmdd;
}
function timeInHhMmSs() {
  var d = new Date;
  var hhmmss = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
  return hhmmss;
}
function dateInHhMmSs() {
  var d = new Date;
  var yymmdd = ("0" + d.getYear()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  return yymmdd;
}
function getDateTimeStamp() {
  var dateTime = dateInHhMmSs() + " " + timeInHhMmSs();
  return dateTime;
}
Array.prototype.pushUnique = function(element) {
  if (this.indexOf(element) < 0) {
    this.push(element);
  }
};
Array.prototype.removeAll = function(key) {
  var index = this.indexOf(key);
  if (index === -1) {
    return;
  }
  this.splice(index, 1);
  this.removeAll(key);
};
String.prototype.trim = function() {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
function multiSearchOr(text, searchWords) {
  var searchExp = new RegExp(searchWords.join("|"), "gi");
  return searchExp.test(text);
}
function jsonAreEqual(obj1, obj2) {
  var status = false;
  try {
    status = JSON.stringify(obj1) == JSON.stringify(obj2);
  } catch (e) {
  }
  return status;
}
jQuery.fn.textOnly = function() {
  return $(this).clone().children().remove().end().text();
};
var timeTaken = {t1:1, t2:1, t3:-1, start:function() {
  this.t1 = performance.now();
}, end:function() {
  this.t2 = performance.now();
}, diff:function() {
  this.t3 = Number((this.t2 - this.t1).toFixed(3));
  return this.t3 + "ms";
}};
var logger = function() {
  function logger(pageId) {
    this.pageId = pageId;
  }
  function print(msg, type) {
    var logTime = new Date;
    logTime = logTime.getHours() + ":" + logTime.getMinutes() + ":" + logTime.getSeconds() + ":" + Math.floor(logTime.getMilliseconds());
    if (TESTING) {
      try {
        if (type == "info") {
          console.log(this.pageId + "[" + logTime + "]# " + msg);
        } else {
          if (type == "warn") {
            console.warn(this.pageId + "[" + logTime + "]# " + msg);
          } else {
            if (type == "error") {
              console.error(this.pageId + "[" + logTime + "]# " + msg);
            }
          }
        }
      } catch (e) {
      }
    }
    return;
  }
  logger.prototype.info = function(msg) {
    return print.call(this, msg, "info");
  };
  logger.prototype.warn = function(msg) {
    return print.call(this, msg, "warn");
  };
  logger.prototype.error = function(msg) {
    return print.call(this, msg, "error");
  };
  return logger;
}();
String.prototype.contains = function(it) {
  return this.indexOf(it) != -1;
};
function isInArray(string, array) {
  var status = false;
  if (string && array) {
    string = string.trim();
    for (i = 0; i < array.length; i++) {
      if (string.indexOf(array[i].trim()) >= 0) {
        return true;
      }
    }
  }
  return status;
}
String.prototype.hashCode = function() {
  if (Array.prototype.reduce) {
    return this.split("").reduce(function(a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  }
  var hash = 0;
  if (this.length === 0) {
    return hash;
  }
  for (var i = 0; i < this.length; i++) {
    var character = this.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash = hash & hash;
  }
  return hash;
};
function error(msg) {
  return {message:msg};
}
function getRows(selector) {
  var height = $(selector).height();
  var line_height = $(selector).css("line-height");
  line_height = parseFloat(line_height);
  var rows = height / line_height;
  return Math.round(rows);
}
;
