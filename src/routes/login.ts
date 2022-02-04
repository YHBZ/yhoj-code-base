import express = require('express');
import bodyParser = require('body-parser');
import path = require('path');
import { log_httpget, log_httppost } from '../log';
import { front } from '../global';
var login = express.Router();
var parser = bodyParser.urlencoded({extended: false});

login.get('/login', (req, res) => {
    log_httpget('/login');
    res.sendFile(path.join(front, 'login.html'));
});

login.post('/auth/login', parser, (req, res) => {
    log_httppost('/auth/login');
    res.send(`Hello, ${req.body.user}!`);
});

export default login;
