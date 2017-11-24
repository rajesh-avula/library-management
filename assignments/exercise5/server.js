var http = require('http');
var evenModule = require('./EventHandlerModule');
var server = http.createServer(function (request, response) {
    
        even = evenModule.evenEvent();
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<html><body> The no.of visitors visited the site is :" + even + "</body></html>"); 
});

server.listen(3001);
console.log("Server is running");