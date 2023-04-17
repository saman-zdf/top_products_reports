"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.developmentLogger = exports.productionLogger = void 0;
const winston_1 = require("winston");
const { combine, timestamp, json, errors, printf } = winston_1.format;
const productionLogger = () => {
    return (0, winston_1.createLogger)({
        format: combine(timestamp(), errors({ stack: true }), json()),
        defaultMeta: { service: 'user-service' },
        transports: [new winston_1.transports.Console()],
    });
};
exports.productionLogger = productionLogger;
const developmentLogger = () => {
    const logFormat = printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} ${level}: ${stack || message}`;
    });
    return (0, winston_1.createLogger)({
        format: combine(winston_1.format.colorize(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), errors({ stack: true }), logFormat),
        transports: [new winston_1.transports.Console()],
    });
};
exports.developmentLogger = developmentLogger;
