require('dotenv').config();
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
require('./config/db/connection');
const routes = require('./routes/finances');
const { handleErrors } = require('./middlewares/errors');
const PORT = process.env.PORT || 8001;
const { v4: uuidv4 } = require('uuid');
const { configLogger } = require('./middlewares/logger');

// parse(transformar) o body no formato json
server.use(bodyParser.json());
server.use(configLogger);
server.use((req, res, next) => {
    req["request_id"] = uuidv4();
    next();
})
server.use(routes);
server.use(handleErrors);

server.listen(PORT, console.log(`Running on port ${PORT}`))