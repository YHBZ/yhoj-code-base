// written by sjc0910
import express = require('express');
import http = require('http');
import crypto = require('crypto');
import chalk = require('chalk');
import path = require('path');

import login from './routes/login';
import { front, config } from './global';
import { log_httpget } from './log';

var App = express();
var server = http.createServer(App);

App.use(express.static(front));
App.use(login);

App.get(['/notfound', '/not_found', '/404'], (req, res) => {
    log_httpget('/notfound', 200);
    res.sendFile(path.join(front, 'notfound.html'));
});

App.get('/open-source', (req, res) => {
    log_httpget('/open-source ==> https://github.com/YHBZ/yhoj-code-base', 301);
    // 301 - 永久重定向
    // 302 - 临时重定向
    res.redirect(301, "https://github.com/YHBZ/yhoj-code-base");
});

App.get(['/', '/index', '/index.htm', '/index.html', '/home', '/homepage'], (req, res) => {
    log_httpget('/');
    res.sendFile(path.join(front, 'index.html'));
});


// 404
App.get('/*', (req, res) => {
    log_httpget(`${req.path} --> /notfound.html`, 404);
    res.sendFile(path.join(front, 'notfound.html'));
});

server.listen(config.port, config.host, () => {
    let host = config.host;
    if (host === "0.0.0.0") host = "127.0.0.1";
    console.log("Start listening...");
    console.log(chalk`Please visit {blue {underline http://${host}:${config.port}}}.`);
});
