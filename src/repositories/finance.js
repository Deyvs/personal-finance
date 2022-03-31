const { balance } = require('./model/model');
const { v4: uuidv4 } = require('uuid');

//camada de repositories acessa o DB

const getFinances = async () => {
    const finances = await balance.find({});
    return finances;
}

const getFinancesById = async (id) => {
    const finance = await balance.findById(id);
    return finance;
}

const createFinance = async (body) => {
    const created = await balance.create({ ...body, _id: uuidv4() });
    return created;
}

const updateFinanceById = async (id, body) => {
    await balance.updateOne({ _id: id}, body);
    return true;
}

const deleteFinanceById = async (id) => {
    await balance.deleteOne({ _id: id });
    return true;
}

module.exports = {
    getFinances,
    getFinancesById,
    createFinance,
    updateFinanceById,
    deleteFinanceById
}