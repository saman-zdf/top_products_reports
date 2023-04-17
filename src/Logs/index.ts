import { developmentLogger, productionLogger } from './Logger';

let logger: any | null = null;

if (process.env.NODE_ENV === 'production') {
  logger = productionLogger();
} else {
  logger = developmentLogger();
}

export default logger;
