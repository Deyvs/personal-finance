const { balance } = require('./model/model');
const { v4: uuidv4 } = require('uuid');
const { loggers } = require('winston');

//camada de repositories - acessa o DB

const getFinances = async (params = {}, logger) => {
    logger.info("[Finances Repository] Start request to get finances");
    const finances = await balance.find(params);
    logger.info("[Finances Repository] End request to get finances repository");
    return finances;
}

const getFinancesById = async (id, logger) => {
    logger.info(`[Finances Repository] Start request to get finances repository foi id: ${id}`);
    const finance = await balance.findById(id);
    logger.info(`[Finances Repository] End request to get finances repository foi id: ${id}`);
    return finance;
}

const createFinance = async (body, logger) => {
    logger.info(`[Finances Repository] Start create finance ${JSON.stringify(body)}`);
    const created = await balance.create({ ...body, _id: uuidv4() });
    logger.info(`[Finances Repository] Start create finance ${JSON.stringify(created)}`);
    return created;
}

const updateFinanceById = async (id, body, logger) => {
    logger.info(`[Finances Repository] Start update finance by id: ${id}`);
    await balance.updateOne({ _id: id}, body);
    logger.info(`[Finances Repository] Update finance by id: ${id} success`);
    return true;
}

const deleteFinanceById = async (id, logger) => {
    logger.info(`[Finances Repository] Start delete finance by id: ${id}`);
    await balance.deleteOne({ _id: id });
    logger.info(`[Finances Repository] Delete finance by id: ${id} with success`);
    return true;
}

module.exports = {
    getFinances,
    getFinancesById,
    createFinance,
    updateFinanceById,
    deleteFinanceById
}