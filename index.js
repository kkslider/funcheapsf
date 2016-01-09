/* jslint node: true */
'use strict';

var nodeStatic = require('node-static');

var fileServer = new nodeStatic.Server('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function() {
        fileServer.serve(request, response);
    }).resume();
}).listen(process.env.PORT || 8080);
