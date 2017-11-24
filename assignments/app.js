var http = require('http');
var greetingModule = require("./greetings");
var server = http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    result = greetingModule.sayHello();
    response.write("<html><body><h1>"+result+"</h1></body></html>");
    response.end();
});
server.listen(3001);