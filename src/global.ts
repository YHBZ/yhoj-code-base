import fs = require('fs');
import path = require('path');
import mysql = require('mysql');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config.json')).toString());
const front = path.join(__dirname, '../front');
var db: mysql.Connection = mysql.createConnection(config["MySQL"]);

export {config, front, db};
