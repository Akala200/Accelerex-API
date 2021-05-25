/* eslint-disable no-nested-ternary */
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import logger from 'morgan';
import bodyParser from 'body-parser';
import config from './server/config/index';
import { notFound, errorHandler } from './server/middlewares/errorhandlers';
import traceLogger from './server/logger/tracelogger';
import routes from './server/routes';


// initialize express
const app = express();

// for request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger('dev'));

// connect to mongodb
// eslint-disable-next-line no-nested-ternary
// eslint-disable-next-line max-len


const mongoURL = config.DB_TEST;
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}, () => {
  process.stdout.write('connected to mongodb');
});

app.get('/api', (req, res) => {
  res.json({ massage: 'Welcome to restaurant Api' });
});

// Routes
app.use('/api', routes);

app.use('*', notFound);
app.use(errorHandler);

process.on('unhandledRejection', (reason) => {
  traceLogger(reason);
});

process.on('uncaughtException', (reason) => {
  traceLogger(reason);
});

const PORT = process.env.PORT || 5678;
app.listen(PORT, () => {
  process.stdout.write(`app is listening on port ${PORT}`);
});

export default app;
