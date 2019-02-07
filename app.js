let http = require('http');
let date = new Date();
date.toLocaleString();
const PORT = process.env.PORT || 3000;
http.createServer(function (request, responce)
{
    responce.writeHead(200, {'Content-type':'text/plain'});
    responce.write("Response's coming from server...\n");
    responce.write("Current Time" + date);
    responce.end();
}).listen(PORT);
console.log('listening...');