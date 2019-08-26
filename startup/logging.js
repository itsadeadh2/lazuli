const winston = require('winston');
require('express-async-errors');

module.exports = function() {
    winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    );
    winston.add(new winston.transports.File({ filename: 'logfile.log'}));
    winston.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }));

    process.on('uncaughtException', (ex) => {
        winston.error(ex.message, ex);
        process.exit(1);
    })

    process.on('unhandledRejection', (ex) => {
        winston.error(ex.message, ex)
        process.exit(1);
    })
}