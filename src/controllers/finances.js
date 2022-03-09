const { balance } = require('../repositories/model');

const getFinances =  async (req, res) => {
    const finances = await balance.find({});
    res.json(finances);
};

const getFinancesById = async (req, res) => {
    const financeId = req.params.financeId; //capturando o id que vem na requisição
    const finance = await balance.findById(financeId);
    res.json(finance);
};

const createFinance = async (req, res) => {
    const body = req.body;

    const created = await balance.create(body);
    res.status(201).json(created); 
}

const updateFinanceById = async (req, res) => {
    const financeId = req.params.financeId;
    await balance.updateOne({ _id: financeId }, body);
    res.json({
        message: "deleted",
    });
}

const deleteFinanceById = async (req, res) => {
    const financeId = req.params.financeId;
    await balance.deleteOne({ _id: financeId});
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