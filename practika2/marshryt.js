const http = require("http");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if(request.url === "/home" || request.url === "/"){
        response.write("<h2>Home</h2>");
}
response.end('NORM');
};
http.createServer(requestHandler).listen(3000);