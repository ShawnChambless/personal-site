/* jshint node: true */

'use strict';
var express     = require('express'),
    app         = express(),
    http        = require( 'http' ),
    favicon     = require( 'serve-favicon' ),
    compress    = require('compression'),
    httpServer  = http.createServer(app);

app
    .use(compress())
    .use(favicon(__dirname + '/public/favicon.ico'))
    .use(express.static(__dirname + '/public'));


httpServer.listen(80);
