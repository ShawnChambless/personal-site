/* jshint node: true */

'use strict';
var express     = require('express'),
    app         = express(),
    http        = require( 'http' ),
    favicon     = require( 'serve-favicon' ),
    compress    = require('compression'),
    httpServer  = http.createServer(app);

app
    .get('/*', function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://shawnchambless.com', 'http://localhost:8080/*');
        next();
    })
    .use(compress())
    .use(favicon(__dirname + '/public/favicon.ico'))
    .use(express.static(__dirname + '/public'));


httpServer.listen(8080);
