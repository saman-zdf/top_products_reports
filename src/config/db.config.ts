import dotenv from 'dotenv';
dotenv.config();

export default {
  HOST: process.env.DB_HOST,
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_DATABASE,
  PORT: process.env.DB_PORT,
};
