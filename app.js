const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const { create,
        readAll,
        readById,
        deleteById,
        updateById
    } = require('./data');

server.use(bodyParser.json());

server.get('/finances', (req, res) => {
    const finances = readAll();
    res.json(finances);
});

server.get('/finances/:financeId', (req, res) => {
    const financeId = req.params.financeId;
    const financeIdToInt = parseInt(financeId);
    const finance = readById(financeIdToInt);
    res.json(finance);
});

server.post('/finances', (req, res) => {
    const body = req.body;

    const created = create(body);
    res.status(201).json(created); 
})

server.listen(8001,console.log("Running on port 8001"))