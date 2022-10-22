//Copyright 2019 and Patent Pending. 2019-10-26 22:43:13
ExifCache = {entriesKey:"exifCache_entries", indicesKey:"exifCache_indices", entries:null, indices:null};
ExifCache.clear = function() {
  ExifCache.entries = {};
  ExifCache.indices = [];
  delete localStorage[ExifCache.entriesKey];
  delete localStorage[ExifCache.indicesKey];
};
ExifCache.getCacheCount = function() {
  return ExifCache.indices.length;
};
ExifCache.save = function() {
  try {
    localStorage[ExifCache.entriesKey] = JSON.stringify(ExifCache.entries);
    localStorage[ExifCache.indicesKey] = JSON.stringify(ExifCache.indices);
  } catch (e) {
    ExifCache.clear();
  }
};
ExifCache.load = function() {
  if (localStorage.hasOwnProperty(ExifCache.entriesKey)) {
    ExifCache.entries = JSON.parse(localStorage[ExifCache.entriesKey]);
  } else {
    ExifCache.entries = {};
  }
  if (localStorage.hasOwnProperty(ExifCache.indicesKey)) {
    ExifCache.indices = JSON.parse(localStorage[ExifCache.indicesKey]);
  } else {
    ExifCache.indices = [];
  }
  if (!ExifCache.entries) {
    ExifCache.entries = {};
  }
  if (!ExifCache.indices) {
    ExifCache.indices = [];
  }
};
ExifCache.addEntry = function(url, exif) {
  if (ExifCache.hasEntry(url)) {
    return;
  }
  var cacheSize = ExifViewerConfig.getNumber("cacheSize");
  var cacheCount = ExifCache.getCacheCount();
  if (cacheSize > 0) {
    if (cacheCount >= cacheSize) {
      var deletedUrl = ExifCache.indices.shift();
      delete ExifCache.entries[deletedUrl];
    }
    ExifCache.entries[url] = exif;
    ExifCache.indices.push(url);
  }
};
ExifCache.getEntryUrlByIndex = function(index) {
  return ExifCache.indices[index];
};
ExifCache.getEntryByIndex = function(index) {
  return ExifCache.getEntry(ExifCache.getEntryUrlByIndex(index));
};
ExifCache.hasEntry = function(url) {
  return false;
  return ExifCache.entries.hasOwnProperty(url);
};
ExifCache.getEntry = function(url) {
  var result = null;
  if (ExifCache.hasEntry(url)) {
    result = ExifCache.entries[url];
  }
  return result;
};

