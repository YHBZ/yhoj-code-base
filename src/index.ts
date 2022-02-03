import express = require('express');
import http = require('http');
import path = require('path');
import crypto = require('crypto');
import fs = require('fs');
var App = express();
var server = http.createServer(App);

const config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config.json')).toString());

server.listen(config.port, config.host, () => {
    console.log("Start listening...");
});
