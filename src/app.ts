import express from 'express';
import { Request, Response } from 'express';
import logger from './Logs/index';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { getAllVenues } from './database/db';
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

// Test Venues
// We need to handle this in controller
app.get('/venues', async (req: Request, res: Response) => {
  try {
    const venues = getAllVenues();
    console.log(venues);
    res.status(200).json(venues);

    logger.info('Success request for venues.');
  } catch (error) {
    console.log(error);

    logger.error('Error on venues request.', { error });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  return console.log(`Listening on port: ${PORT}`);
});
