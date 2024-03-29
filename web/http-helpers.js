var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

var that = this;

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)

};

exports.sendResponse = function(response, data, statusCode){
  statusCode = statusCode || 200;
  console.log(response);
  response.writeHead(statusCode, headers);
  response.end( data );
};

exports.collectData = function(request, callback){
  // if (isUrlInList)
  // archive.addUrlToList(request, function() {
  //   this.sendResponse(request, request._postData.url , 302);
  // });
};
//

// As you progress, keep thinking about what helper functions you can put here!
