import fs = require('fs');
import path = require('path');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config.json')).toString());
const front = path.join(__dirname, '../front');


export {config, front};
