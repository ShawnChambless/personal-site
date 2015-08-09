/* jshint node: true */

'use strict';
var express     = require('express'),
    app         = express(),
    http        = require( 'http' ),
    favicon     = require( 'serve-favicon' ),
    httpServer  = http.createServer(app);


app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));


httpServer.listen(8081, function(){console.log('Server is listening on 8081');});
