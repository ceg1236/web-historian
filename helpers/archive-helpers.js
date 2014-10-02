var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var helpers = require('../web/http-helpers.js');
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!
//VAR DATA = []

exports.readListOfUrls = function(callback) { //DOES NOT WORK YET

  fs.readFile(this.paths.list, function(err, data) {
    var dataArray = (data.toString().split('\n'));

    callback(dataArray);

  });
};

exports.isUrlInList = function(request, response, callback){ //DOES NOT WORK YET

  fs.readFile(this.paths.list, function(err, data) {
    if (err || data.indexOf(request.url) < 0) {
      helpers.sendResponse(response, null, 404);
    } else {
      callback();
    }
  });
};

exports.addUrlToList = function(request, callback){ //REWRITES ENTIRE FILE EACH TIME, NEED TO FIX
  exports.isUrlInList();
  fs.appendFile(exports.paths.list, request._postData.url +'\n', function() {
    console.log('its saved!');
    callback();
  })
};

exports.isURLArchived = function(){
};

exports.downloadUrls = function(){
};
