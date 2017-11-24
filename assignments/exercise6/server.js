var http = require("http");
var userRouting = require('./RouteUser');
url = require("url");
http.createServer(function (request, response) {
    var url_parts = url.parse(request.url);
    userRouting.enableRoute(url_parts, request, response);
}
).listen(3001);

console.log("Server started");