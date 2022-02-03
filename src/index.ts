import express = require('express');
import http = require('http');
import path = require('path');
import config = require('../config.json');
import crypto = require('crypto');
var App = express();
var server = http.createServer(App);

server.listen(config.port, config.host, () => {
    console.log("Start listening...");
});
