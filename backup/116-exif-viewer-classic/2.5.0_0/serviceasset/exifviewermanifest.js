//Copyright 2019 and Patent Pending. 2019-10-26 22:43:12
ExifViewerManifest = {manifest:null};
ExifViewerManifest.getData = function() {
  if (ExifViewerManifest.manifest == null) {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", chrome.extension.getURL("manifest.json"), false);
    xhr.send();
    ExifViewerManifest.manifest = JSON.parse(xhr.responseText);
    if (ExifViewerManifest.manifest.hasOwnProperty("update_url") == false) {
      ExifViewerManifest.manifest.version += " Dev";
    }
  }
  return ExifViewerManifest.manifest;
};

