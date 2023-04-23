"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllVenues = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const db_config_1 = __importDefault(require("../config/db.config"));
const pool = mysql2_1.default
    .createPool({
    host: db_config_1.default.HOST,
    user: db_config_1.default.USERNAME,
    database: db_config_1.default.DATABASE,
    password: db_config_1.default.PASSWORD,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
})
    .promise();
const getAllVenues = () => {
    pool.query('SELECT * FROM venues', function (err, rows) {
        console.log(rows);
        console.log(err);
    });
    Promise;
};
exports.getAllVenues = getAllVenues;
