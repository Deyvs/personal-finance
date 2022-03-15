const repository = require('../repositories/finance');

const getFinances = async () => {
    const finances = await repository.getFinances();
    return finances;
}

const getFinancesById = async (id) => {
    const finance = await repository.getFinancesById(id);
    return finance;
}

const createFinance = async (body) => {
    const created = await repository.createFinance(body);
    return created;
}

const updateFinanceById = async (id, body) => {
    await repository.updateFinanceById(id, body);
    return true;
}

const deleteFinanceById = async (id) => {
    await repository.deleteFinanceById(id);
    return true;
}

module.exports = {
    getFinances,
    getFinancesById,
    createFinance,
    updateFinanceById,
    deleteFinanceById
}