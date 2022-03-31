const uuid = require('uuid');
const { FINANCE_ID_NOT_VALID_ERROR, DESCRIPTION_FIELD_ERROR } = require('../constants/errors');

const validateFinanceId = (req, res, next) => {
    const { financeId } = req.params;
    if (uuid.validate(financeId) === false) {
        throw FINANCE_ID_NOT_VALID_ERROR;
    }
    next();
}

const validateBodyFields = (req, res, next) => {
    const  { description, price, category, paymentType, operationType } = req.body;

    if (!exists(description)) {
        throw DESCRIPTION_FIELD_ERROR;
    }

    if (!hasValidPrice(price)) {
        return res.json({
            status:400,
            message: "price is required or should be greater than 0 or should be a number"
        });
    }

    if (!exists(category)) {
        return res.json({
            satatus: 400,
            message: "category is required"
        });
    }

    if (!exists(paymentType)) {
        return res.json({
            staus: 400,
            message: "paymentType is required"
        });
    }

    if (!exists(operationType)) {
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
        if (key === "price"  && !hasNecessaryFields(field[key])) {
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




// {
//     "description": "Playstation 5 pro",
//     "price": 5500,
//     "category": "hobbie",
//     "paymentType": "credit card",
//     "operationType": "debit"
// }