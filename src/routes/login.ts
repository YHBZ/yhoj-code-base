// written by sjc0910
import express = require('express');
import bodyParser = require('body-parser');
import path = require('path');
import chalk = require('chalk');
import uuid = require('uuid');
import { verify } from 'hcaptcha';
import { log_httpget, log_httppost } from '../log';
import { config, db, front } from '../global';
import { psw_hash } from './encrypto';
import email_verify from '../email'; // This module is private.
var login = express.Router();
var parser = bodyParser.urlencoded({extended: false});

login.get(['/login', '/sign-in'], (req, res) => {
    log_httpget(req.path);
    res.sendFile(path.join(front, 'login.html'));
});

login.get(['/register', '/sign-up'], (req, res) => {
    log_httpget(req.path);
    res.sendFile(path.join(front, 'register.html'));
});

login.post('/auth/register', parser, (req, res) => {
    let id:string = uuid.v4();
    log_httppost('/auth/register');
    verify(config.security['hcaptcha-secret'], req.body['h-captcha-response'])
    .then((data) => {
        let user:string = req.body.user;
        let psw:string = psw_hash(req.body.psw);
        let email:string = psw_hash(req.body.email);
        if (data.success === true) {
            email_verify(email).then((available) => {
                if (!available) return;
                db.query('insert into user (id, name, psw, email) values (NULL, ?, ?, ?)',
                [
                    user,
                    psw,
                    email
                ], (err, results) => {
                    if (err !== null) console.error(err);
                    
                });
            })
        }
        log_httppost(chalk` status: {red failure}!`);
    }).catch(console.error);
});

login.post('/auth/login', parser, (req, res) => {
    log_httppost('/auth/login');
    res.send(`Hello, ${req.body.user}!`);
});

export default login;
