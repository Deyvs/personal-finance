const service = require('../services/finance');

//recebe a requisição e chama a camada de services 

const getFinances =  async (req, res) => {
    const finances = await service.getFinances();
    res.json(finances);
};

const getFinancesById = async (req, res) => {
    const financeId = req.params.financeId; //capturando o id que vem na requisição
    const finance = await service.getFinancesById(financeId);
    res.json(finance);
};

const createFinance = async (req, res) => {
    const body = req.body;

    const created = await service.createFinance(body);
    res.status(201).json(created); 
}

const updateFinanceById = async (req, res) => {
    const financeId = req.params.financeId;
    const body = req.body;
    await service.updateFinanceById(financeId, body);
    res.json({
        message: "updated",
    });
}

const deleteFinanceById = async (req, res) => {
    const financeId = req.params.financeId;
    await service.deleteFinanceById(financeId);
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