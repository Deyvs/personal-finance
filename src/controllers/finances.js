const service = require('../services/finance');

//recebe a requisição e chama a camada de services 

const getFinances =  async (req, res) => {
    const params = req.query;
    const logger = req.logger;
    logger.info("[Finances Controller] Start request to get finances");
    const finances = await service.getFinances(params,logger);
    logger.info(`[Finances Controller] End request to get finances - registries found: ${finances.length}`);

    res.json(finances);
};

const getFinancesById = async (req, res) => {
    const financeId = req.params.financeId; //capturando o id que vem na requisição
    const logger = req.logger;

    logger.info(`[Finances Controller] Starting request to get finacnes for id: ${financeId}`);
    const finance = await service.getFinancesById(financeId, logger);
    logger.info(`[Finances Controller] End request to get finances for id: ${financeId}`);

    res.json(finance);
};

const createFinance = async (req, res) => {
    const { body, logger } = req;
    
    logger.info("[Finances Controller] Creating finance", JSON.stringify(body, null, 2));

    try {
        const created = await service.createFinance(body, logger);
        res.status(201).json(created); 
    } catch (error) {
        logger.info("[Finances Controller] Error on Creating finance", JSON.stringify(body, null, 2));

        res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

const updateFinanceById = async (req, res) => {
    const financeId = req.params.financeId;
    const { body, logger } = req;

    logger.info(`[Finances Controller] Start update financeId ${financeId}`);
    await service.updateFinanceById(financeId, body, logger);
    logger.info(`[Finances Controller] End update financeId ${financeId}`);

    res.json({
        message: "updated",
    });
}

const deleteFinanceById = async (req, res) => {
    const { financeId } = req.params;
    const logger = req.logger;

    logger.info(`[Finances Controllers] Start delete financeId ${financeId}`);
    await service.deleteFinanceById(financeId, logger);
    logger.info(`[Finances Controllers] End delete financeId ${financeId}`);

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