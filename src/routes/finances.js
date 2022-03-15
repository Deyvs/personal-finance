const routes = require('express').Router();
const {
    getFinances,
    getFinancesById,
    createFinance,
    updateFinanceById,
    deleteFinanceById
} = require('../controllers/finances');

<<<<<<< HEAD
//requisição bate no servidor que chama routes

=======
>>>>>>> a7d103731e24bb298ce2b0dd27246ca739a4440b
routes.get('/finances', getFinances);
routes.get('/finances/:financeId', getFinancesById);
routes.post('/finances', createFinance);
routes.patch('/finances/:financeId', updateFinanceById);
routes.delete('/finances/:financeId', deleteFinanceById);

module.exports = routes;