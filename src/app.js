require('dotenv').config()
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
require('./config-db/connection');
const routes = require('./routes/finances');
const PORT = process.env.PORT || 8001;

// parse(transformar) o body no formato json
server.use(bodyParser.json());
server.use(routes);

server.listen(PORT, console.log(`Running on port ${PORT}`))