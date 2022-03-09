const routes = require('express').Router();
const {
    getFinances,
    getFinancesById,
    createFinance,
    updateFinanceById,
    deleteFinanceById
} = require('../controllers/finances');

routes.get('/finances', getFinances);
routes.get('/finances/:financeId', getFinancesById);
routes.post('/finances', createFinance);
routes.patch('/finances/:financeId', updateFinanceById);
routes.delete('/finances/:financeId', deleteFinanceById);

module.exports = routes;