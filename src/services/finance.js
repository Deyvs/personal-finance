const repository = require('../repositories/finance');

const getFinances = async (params, logger) => {
    logger.info("[Finances Service] Start request to get finances service");
    const finances = await repository.getFinances(params, logger);
    logger.info("[Finances Service] End request to get finances service");
    return finances;
}

const getFinancesById = async (id, logger) => {
    logger.info(`[Finances Service] Start request to get finances service for id: ${id}`)
    const finance = await repository.getFinancesById(id, logger);
    logger.info(`[Finances Service] End request to get finances service for id: ${id}`)
    return finance;
}

const createFinance = async (body, logger) => {
    logger.info(`[Finances Service] Start create finance ${JSON.stringify(body)}`);
    const created = await repository.createFinance(body, logger);
    logger.info(`[Finances Service] Create finance with success`);
    return created;
}

const updateFinanceById = async (id, body, logger) => {
    logger.info(`[Finances Service] Start update finance ${JSON.stringify(body)}`);
    await repository.updateFinanceById(id, body, logger);
    logger.info("[Finances Service] Update finance with success");
    return true;
}

const deleteFinanceById = async (id, logger) => {
    logger.info(`[Finances Service] Start request to delete finance by id: ${id}`);
    await repository.deleteFinanceById(id, logger);
    logger.info(`[Finances Service] Delete finance with success`);
    return true;
}

module.exports = {
    getFinances,
    getFinancesById,
    createFinance,
    updateFinanceById,
    deleteFinanceById
}