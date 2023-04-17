"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("./Logger");
let logger = null;
if (process.env.NODE_ENV === 'production') {
    logger = (0, Logger_1.productionLogger)();
}
else {
    logger = (0, Logger_1.developmentLogger)();
}
exports.default = logger;
