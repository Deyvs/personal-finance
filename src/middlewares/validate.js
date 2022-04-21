const uuid = require('uuid');
const { FINANCE_ID_NOT_VALID_ERROR, DESCRIPTION_FIELD_ERROR } = require('../constants/errors');
const { logger } = require('../utils/logger');

const validateFinanceId = (req, res, next) => {
    const { financeId } = req.params;
    logger.info(`Starting validation of FinanceId ${financeId}`);
    if (uuid.validate(financeId) === false) {
        logger.info(`Error on validate of FinanceId ${financeId}`);
        throw FINANCE_ID_NOT_VALID_ERROR;
    }
    logger.info(`FinacneId ${financeId} validate with success`);
    next();
}

const validateBodyFields = (req, res, next) => {
    const  { description, price, category, paymentType, operationType } = req.body;
    
    if (!exists(description)) {
        logger.info("[Validate Body Fields] Description doesn't exist");
        throw DESCRIPTION_FIELD_ERROR;
        
    }

    if (!hasValidPrice(price)) {
        logger.info("[Validate Body Fields] Price doesn't exist");
        return res.json({
            status:400,
            message: "price is required or should be greater than 0 or should be a number"
        });
    }

    if (!exists(category)) {
        logger.info("[Validate Body Fields] Category doesn't exist");
        return res.json({
            satatus: 400,
            message: "category is required"
        });
    }

    if (!exists(paymentType)) {
        logger.info("[Validate Body Fields] Payment Type doesn't exist");
        return res.json({
            staus: 400,
            message: "paymentType is required"
        });
    }

    if (!exists(operationType)) {
        logger.info("[Validate Body Fields] Operation Type doesn't exist");
        return res.json({
            status: 400,
            message: "operationType is required"
        });
    }

    next();
}

const validateBodyFieldsOnUpdate = (req, res, next) => {
    const field = req.body;
    const expectedFields = ["description", "price", "category", "paymentType", "operationType"];
    const fieldKeys = Object.keys(field);

    const hasNecessaryFields = fieldKeys.every(key => expectedFields.includes(key));

    if (!hasNecessaryFields) {
        return res.json({
            status: 400,
            message: `Body only allow these fields: ${expectedFields.join(",")}`
        });
    }
    
    for (let key in field) {
        if (key === "price"  && !hasValidPrice(field[key])) {
            return res.json({
                status: 400,
                message: "Body has wrong value fields"
            });
        }

        if (!exists(field[key])) {
            return res.json({
                status: 400,
                message: "Body has wrong value fields"
            });
        }
    }

    next();
}

const exists = (field) => field && field !== "";

const hasValidPrice = (price) => !(!exists(price) || parseFloat(price) === 0.00 || price < 0);

module.exports = {
    validateFinanceId,
    validateBodyFields,
    validateBodyFieldsOnUpdate
}




