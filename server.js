var fs = require("fs");
var express = require("express");

var app = express();

app.use(app.router);
app.use(express.static(__dirname + "/"));

app.listen( "7777", "127.0.0.1" );