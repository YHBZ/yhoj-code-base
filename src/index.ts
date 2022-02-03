import express = require('express');
import http = require('http');
import path = require('path');
import crypto = require('crypto');
import fs = require('fs');
import chalk = require('chalk');
var App = express();
var server = http.createServer(App);
const config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config.json')).toString());
const front = path.join(__dirname, '../front');

App.get('/', (req, res) => {
    console.log(chalk.green('[HTTP GET] ') + '/');
    res.sendFile(path.join(front, 'index.html'));
});

server.listen(config.port, config.host, () => {
    console.log("Start listening...");
});
