const { 
    FINANCE_ID_NOT_VALID_ERROR, 
    DESCRIPTION_FIELD_ERROR 
} = require('../constants/errors');

const handleErrors = (err, req, res, next) => {

    console.log("[ Error ] --> ", err);

    if (err === FINANCE_ID_NOT_VALID_ERROR) {
        return res.status(400).json({
            status: 400,
            message: "FinanceId is not a valida Id"
        });
    }

    if (err === DESCRIPTION_FIELD_ERROR) {
        return res.status(400).json({
            status: 400,
            message: "description is required"
        });
    }

    next();
}

module.exports = {
    handleErrors
}