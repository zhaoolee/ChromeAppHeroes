//Copyright 2019 and Patent Pending. 2019-10-26 22:43:11
function dbPut(key, value) {
  if (!dbSupport()) {
    dbLog("can't store");
    return;
  }
  localStorage.setItem(key, value);
}
function dbAppend(key, value) {
  if (!dbSupport()) {
    dbLog("can't store");
    return;
  }
  if (localStorage.getItem(key)) {
    localStorage.setItem(key, localStorage.getItem(key) + "," + value);
  } else {
    localStorage.setItem(key, value);
  }
}
function dbGet(key) {
  if (!dbSupport()) {
    dbLog("No storage support");
    return;
  }
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  } else {
    return null;
  }
}
function dbDel(key) {
  localStorage.removeItem(key);
}
function dbSupport() {
  if (typeof Storage !== "undefined") {
    return true;
  } else {
    return false;
  }
}
function dbLog(log) {
  log(log);
}
function clickCounter() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not dbSupport web storage...";
  }
}
function save() {
  var it = document.getElementById("item").value;
  dbPut("key1", it);
}
function get() {
  var its = dbGet("key1");
  document.getElementById("items").innerHTML = its;
}
;
