import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import apolloPlayGround from 'graphql-playground-middleware-express';

import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import {plugins} from '@/plugins';
import {typeDefs} from '@/schemas';
import {resolvers} from '@/resolvers';

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [plugins],
});

app.set('port', process.env.PORT || 3000);

app.use('/assets', express.static(__dirname + 'public'));
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

export {app};
