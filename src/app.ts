import express from 'express';
import { Request, Response } from 'express';
import logger from './Logs/index';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

export const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Health Check
app.get('/', (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: 'Health Check' });
    logger.info('Success request for health check.');
  } catch (error) {
    logger.error('Error on health check request.', { error });
  }
});

app.get('/greeting', (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: 'Hello Foodbomb' });
    logger.info('Success request for Greeting.');
  } catch (error) {
    logger.error('Error greeting endpoint.', { error });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  return console.log(`Listening on port: ${PORT}`);
});
