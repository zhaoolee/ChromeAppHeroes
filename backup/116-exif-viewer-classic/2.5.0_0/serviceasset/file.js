//Copyright 2019 and Patent Pending. 2019-10-26 22:43:11
File = {};
File.download = function(url, onLoad, onError) {
  var xhr = new XMLHttpRequest;
  xhr.onload = function(e) {
    onLoad(this.responseText);
  };
  xhr.onerror = function(e) {
    onError(e);
  };
  xhr.onabort = function(e) {
    onError(e);
  };
  xhr.open("GET", url, true);
  xhr.overrideMimeType("text/plain; charset=x-user-defined");
  xhr.send();
};

