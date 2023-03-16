import express from 'express';
import ViteExpress from 'vite-express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './utils/dbConnection.js';
import RootRouter from './routes/RootRouter.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

dbConnection();

app.use('/api', RootRouter);

const { PORT } = process.env || 8000;

ViteExpress.listen(app, PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${PORT}`),
);
