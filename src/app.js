var http = require('http');
var dt = require('./date.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(1337, '127.0.0.1');