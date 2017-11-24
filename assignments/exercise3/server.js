var http = require('http');
var capitalModule = require('./capital');

querystring = require('querystring');
url = require('url');

var server = http.createServer(function(request,response){
    data1 = "";
    request.on('data', function (chunk) {
        data1 += chunk;
    });
    request.on('end', function () {
        qs = querystring.parse(data1);
        state = qs["search"];
        var result = capitalModule(state);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<html><body bgcolor='skyblue'> Capital of " + state + " is " + result);
        response.end();
    });
});

server.listen(3001);
console.log("Server is running");