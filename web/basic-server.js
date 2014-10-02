var http = require("http");
var handler = require("./request-handler");
var helpers = require('./http-helpers.js');
var urlParser = require('url');

var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(handler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);


var routes = {
  '/': handler
  // ... more of them, ex:
  // '/classes/users': userHandler
};

var server = http.createServer(function(request, response){

  var path = urlParser.parse(request.url);
  var route = routes[path.pathname];
  if( route ){
    console.log('routed');
    route(request, response);
  } else {
    helpers.sendResponse(response, null, 404);
  }

});

