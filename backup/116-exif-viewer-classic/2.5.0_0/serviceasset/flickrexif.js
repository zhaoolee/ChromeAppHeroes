//Copyright 2019 and Patent Pending. 2019-10-26 22:43:11
FlickrExif = {};
FlickrExif.apiKey = "d6019af4d2d1b4db09818c73627ef0fe";
FlickrExif.photoIdPattern = /^https?:\/\/[^\/]*\bflickr\.com\/photos\/[^\/]+\/(\d+)/i;
FlickrExif.getPhotoId = function(url) {
  var m = FlickrExif.photoIdPattern.exec(url);
  return m && Number(m[1]);
};
FlickrExif.getExif = function(url, onload) {
  var photoId = FlickrExif.getPhotoId(url);
  FlickrExif.makeRequest("flickr.photos.getExif", {photo_id:photoId}, onload);
};
FlickrExif.makeRequest = function(method, params, onload) {
  var xhr = new XMLHttpRequest;
  xhr.onload = function(e) {
    onload(JSON.parse(xhr.responseText));
  };
  var url = "http://api.flickr.com/services/rest/?" + "format=json&" + "nojsoncallback=1&" + "method=" + method + "&" + "api_key=" + FlickrExif.apiKey;
  for (var key in params) {
    url += "&" + key + "=" + params[key];
  }
  xhr.open("GET", url);
  xhr.send();
};

