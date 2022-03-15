require('dotenv').config()
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
require('./src/repositories/db');
const routes = require('./src/routes/finances');
const PORT = process.env.PORT || 8001;

// parse(transformar) o body no formato json
server.use(bodyParser.json());
server.use(routes);

server.listen(PORT, console.log(`Running on port ${PORT}`))