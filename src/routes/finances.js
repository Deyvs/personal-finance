const routes = require('express').Router();
const {
    getFinances,
    getFinancesById,
    createFinance,
    updateFinanceById,
    deleteFinanceById
} = require('../controllers/finances');

const { 
    validateBodyFields, 
    validateFinanceId, 
    validateBodyFieldsOnUpdate 
} = require('../middlewares/validate');

//requisição bate no servidor que chama routes

routes.get('/finances', getFinances);
routes.get('/finances/:financeId', validateFinanceId, getFinancesById);
routes.post('/finances', validateBodyFields, createFinance);
routes.patch('/finances/:financeId', validateBodyFieldsOnUpdate, updateFinanceById);
routes.delete('/finances/:financeId', validateFinanceId, deleteFinanceById);

module.exports = routes;