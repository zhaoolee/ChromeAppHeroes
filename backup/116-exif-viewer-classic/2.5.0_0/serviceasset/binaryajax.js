//Copyright 2019 and Patent Pending. 2019-10-26 22:43:11
var BinaryFile = function(strData, iDataOffset, iDataLength) {
  var data = strData;
  var dataOffset = iDataOffset || 0;
  var dataLength = 0;
  this.getRawData = function() {
    return data;
  };
  dataLength = iDataLength || data.length;
  this.getByteAt = function(iOffset) {
    return data.charCodeAt(iOffset + dataOffset) & 255;
  };
  this.getLength = function() {
    return dataLength;
  };
  this.getSByteAt = function(iOffset) {
    var iByte = this.getByteAt(iOffset);
    if (iByte > 127) {
      return iByte - 256;
    } else {
      return iByte;
    }
  };
  this.getShortAt = function(iOffset, bBigEndian) {
    var iShort = bBigEndian ? (this.getByteAt(iOffset) << 8) + this.getByteAt(iOffset + 1) : (this.getByteAt(iOffset + 1) << 8) + this.getByteAt(iOffset);
    if (iShort < 0) {
      iShort += 65536;
    }
    return iShort;
  };
  this.getSShortAt = function(iOffset, bBigEndian) {
    var iUShort = this.getShortAt(iOffset, bBigEndian);
    if (iUShort > 32767) {
      return iUShort - 65536;
    } else {
      return iUShort;
    }
  };
  this.getLongAt = function(iOffset, bBigEndian) {
    var iByte1 = this.getByteAt(iOffset), iByte2 = this.getByteAt(iOffset + 1), iByte3 = this.getByteAt(iOffset + 2), iByte4 = this.getByteAt(iOffset + 3);
    var iLong = bBigEndian ? (((iByte1 << 8) + iByte2 << 8) + iByte3 << 8) + iByte4 : (((iByte4 << 8) + iByte3 << 8) + iByte2 << 8) + iByte1;
    if (iLong < 0) {
      iLong += 4294967296;
    }
    return iLong;
  };
  this.getSLongAt = function(iOffset, bBigEndian) {
    var iULong = this.getLongAt(iOffset, bBigEndian);
    if (iULong > 2147483647) {
      return iULong - 4294967296;
    } else {
      return iULong;
    }
  };
  this.getStringAt = function(iOffset, iLength) {
    var aStr = [];
    for (var i = iOffset, j = 0; i < iOffset + iLength; i++, j++) {
      aStr[j] = String.fromCharCode(this.getByteAt(i));
    }
    return aStr.join("");
  };
  this.getCharAt = function(iOffset) {
    return String.fromCharCode(this.getByteAt(iOffset));
  };
  this.toBase64 = function() {
    return window.btoa(data);
  };
  this.fromBase64 = function(strBase64) {
    data = window.atob(strBase64);
  };
};

