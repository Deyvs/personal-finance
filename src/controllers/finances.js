<<<<<<< HEAD
const service = require('../services/finance');

//recebe a requisição e chama a camada de services 

const getFinances =  async (req, res) => {
    const finances = await service.getFinances();
=======
const { balance } = require('../repositories/model');

const getFinances =  async (req, res) => {
    const finances = await balance.find({});
>>>>>>> a7d103731e24bb298ce2b0dd27246ca739a4440b
    res.json(finances);
};

const getFinancesById = async (req, res) => {
    const financeId = req.params.financeId; //capturando o id que vem na requisição
<<<<<<< HEAD
    const finance = await service.getFinancesById(financeId);
=======
    const finance = await balance.findById(financeId);
>>>>>>> a7d103731e24bb298ce2b0dd27246ca739a4440b
    res.json(finance);
};

const createFinance = async (req, res) => {
    const body = req.body;

<<<<<<< HEAD
    const created = await service.createFinance(body);
=======
    const created = await balance.create(body);
>>>>>>> a7d103731e24bb298ce2b0dd27246ca739a4440b
    res.status(201).json(created); 
}

const updateFinanceById = async (req, res) => {
    const financeId = req.params.financeId;
<<<<<<< HEAD
    const body = req.body;
    await service.updateFinanceById(financeId, body);
    res.json({
        message: "updated",
=======
    await balance.updateOne({ _id: financeId }, body);
    res.json({
        message: "deleted",
>>>>>>> a7d103731e24bb298ce2b0dd27246ca739a4440b
    });
}

const deleteFinanceById = async (req, res) => {
    const financeId = req.params.financeId;
<<<<<<< HEAD
    await service.deleteFinanceById(financeId);
=======
    await balance.deleteOne({ _id: financeId});
>>>>>>> a7d103731e24bb298ce2b0dd27246ca739a4440b
    res.json({
        message: "deleted",
    });
}

module.exports = {
    getFinances,
    getFinancesById,
    createFinance,
    updateFinanceById,
    deleteFinanceById
}