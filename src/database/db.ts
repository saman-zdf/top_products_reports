import mysql from 'mysql2';
import dbConfig from '../config/db.config';

const pool = mysql
  .createPool({
    host: dbConfig.HOST,
    user: dbConfig.USERNAME,
    database: dbConfig.DATABASE,
    password: dbConfig.PASSWORD,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
  })
  .promise();

const getAllVenues = () => {
  pool.query('SELECT * FROM venues', function (err: unknown, rows: unknown) {
    console.log(rows);
    console.log(err);
  });
  Promise<unknown>;
};

export { getAllVenues };
