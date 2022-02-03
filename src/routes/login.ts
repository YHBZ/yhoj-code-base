import express = require('express');
import bodyParser = require('body-parser');
var page = ``;
var login = express.Router();

login.get('/auth/login')
