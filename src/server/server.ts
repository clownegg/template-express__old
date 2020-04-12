import express, {Request, Response, NextFunction} from 'express';
import {ApolloServer} from 'apollo-server-express';
import apolloPlayGround from 'graphql-playground-middleware-express';
import HttpStatus from 'http-status-codes';

import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import {plugins} from '@/plugins';
import {typeDefs} from '@/schemas';
import {resolvers} from '@/resolvers';

import {todoRoutes} from '@/routes';

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [plugins],
});

app.set('port', process.env.PORT || 3000);

/** Middleware */
app.use('/assets', express.static('assets'));
app.use(
  logger('dev', {
    // ログを出さない
    skip: (req) => {
      const url = req.originalUrl;
      return url === '/graphql' || url === '/playground';
    },
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
  })
);

server.applyMiddleware({app});
app.get('/playground', apolloPlayGround({endpoint: '/graphql'}));

// Routing
app.use('/todos', todoRoutes);

/** 404 Error */
app.use((req: Request, res: Response, next: NextFunction) => {
  next({
    statusCode: HttpStatus.NOT_FOUND,
    message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
  });
});

/** Error Handling */
app.use(
  (
    error: {statusCode: number; message: string},
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(error.statusCode).json(error);
  }
);

export {app};
