exports.enableRoute = function (url, request, response) {
    //Get the pathname from the request.url
    var pathname = url.pathname;
    console.log("url_parts.pathname" + url.pathname);

    //According to the path name received, invoke the corresponding function
    switch (pathname) {
        case '/admin': LoginAsAdmin(pathname, request, response);
            break;

        case '/user': LoginAsUser(pathname, request, response);
            break;
        case '/guest': LoginAsGuest(pathname, request, response);
            break;
        default: LoginAsUser(pathname, request, response);
    }
}

LoginAsAdmin = function(pathname,request,response){
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var html = "<body bgcolor='#E2C2F6'><center><H1>Welcome Admin</H1></center></body > "
    response.write(html);
    response.end();
}

LoginAsUser = function (pathname, request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var html = "<body bgcolor='#E2C2F6'><center><H1>Welcome User</H1></center></body > "
    response.write(html);
    response.end();
}
LoginAsGuest = function (pathname, request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var html = "<body bgcolor='#E2C2F6'><center><H1>Welcome Guest</H1></center></body > "
    response.write(html);
    response.end();
}