require('dotenv').config();
const env = require('./config/config').app.env;

const { start } = require('./src/app');

start();