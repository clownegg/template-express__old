import express from 'express';

import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
  })
);

export {app};
