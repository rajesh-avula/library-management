var http =  require('http');
var fs = require('fs');
var server = http.createServer(function(request,response){
    fs.writeFile("message.txt","File Created",function(err,html){
        if(err){
            throw err;
        }
        else{
            console.log("Successfully File Created with name message.txt");
        }
    });
    fs.readFile("./message.txt",function(err,data){
        if(err){
            throw err;
        }
        else{
            console.log("data from file : "+ data);
        }
    });
});

server.listen(3001);
console.log('Server Started ');