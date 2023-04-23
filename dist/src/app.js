"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./Logs/index"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const db_1 = require("./database/db");
dotenv.config();
exports.app = (0, express_1.default)();
// Middleware
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
// Health Check
exports.app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: 'Health Check' });
        index_1.default.info('Success request for health check.');
    }
    catch (error) {
        index_1.default.error('Error on health check request.', { error });
    }
});
exports.app.get('/greeting', (req, res) => {
    try {
        res.status(200).json({ message: 'Hello Foodbomb' });
        index_1.default.info('Success request for Greeting.');
    }
    catch (error) {
        index_1.default.error('Error greeting endpoint.', { error });
    }
});
// Test Venues
exports.app.get('/venues', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const venues = (0, db_1.getAllVenues)();
        console.log(venues);
        res.status(200).json(venues);
        index_1.default.info('Success request for venues.');
    }
    catch (error) {
        console.log(error);
        index_1.default.error('Error on venues request.', { error });
    }
}));
const PORT = process.env.PORT || 3000;
exports.app.listen(PORT, () => {
    return console.log(`Listening on port: ${PORT}`);
});
