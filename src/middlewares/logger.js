const { logger } = require("../utils/logger");
const { v4: uuidv4 } = require('uuid');

const configLogger = (req, res, next) => {
    const enhancedLog = logger.child({
        'x-request-id': uuidv4(),
    });
    req.logger = enhancedLog;
    next();
}

module.exports = {
    configLogger
}