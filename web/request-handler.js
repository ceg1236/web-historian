var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (request, response) {

  var actions = {
      'GET': function(request, response){
        if (request.url === '/') {
          fs.readFile(archive.paths.siteAssets + '/index.html', 'utf8', function(err, data) {
            helpers.sendResponse(response, data);
          });
        } else {
          fs.readFile(archive.paths.list + request.url, 'utf8', function(err, data) {
            archive.isUrlInList(request.url, function() {

              helpers.sendResponse(response, request.url);
            });
          })
        }
      },

      'POST': function(request, response){
        console.log('got to post');
        archive.addUrlToList(request, function() {

          console.log('anything');
          console.log(request);

          helpers.sendResponse(response, null , 302);
          // Do we need sendResponse? Debug this area.
          // Do we need writeHead w POST?
          // POST request, send response, google.com
        });
      },

      'OPTIONS': function(request, response){
        helpers.sendResponse(response, null);
      }
  };

  // module.exports = function(request, response) {

    var action = actions[request.method];
    if( action ){
      action(request, response);
    } else {
      helpers.sendResponse(response, null, 404);
    }
  // };
  response.end(archive.paths.list);

};


