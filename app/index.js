var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) { 
    
    // parse the URL
    var parsedUrl = url.parse(req.url, true);

    // get the path
    var path = parsedUrl.pathname; 
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');
    
    // get the HTTP method
    var method = req.method.toLowerCase();

    // send the response
    res.end('Hello World!\n');

    // log the request path
    console.log('Request received on path: ' + trimmedPath + ' with method: ' + method);
});

server.listen(3000, function() {
    console.log('Server running at http://localhost:3000/');
});