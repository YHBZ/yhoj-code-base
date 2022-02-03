import express = require('express');
import bodyParser = require('body-parser');
var login = express.Router();
var parser = bodyParser.urlencoded({extended: false});

login.get('/auth/login', parser, (req, res) => {

});

export default login;
