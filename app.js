const express = require('express');
const server = express();
const bodyParser = require('body-parser');
require('./db');
const { balance } = require('./model');

server.use(bodyParser.json());

server.get('/finances', async (req, res) => {
    const finances = await balance.find({});
    res.json(finances);
});

server.get('/finances/:financeId', async (req, res) => {
    const financeId = req.params.financeId;    
    const finance = await balance.findById(financeId);
    res.json(finance);
});

server.post('/finances', async (req, res) => {
    const body = req.body;

    const created = await balance.create(body);
    res.status(201).json(created); 
})

server.listen(8001,console.log("Running on port 8001"))