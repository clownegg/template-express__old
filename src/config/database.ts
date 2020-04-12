import {ConnectionOptions} from 'typeorm';

import './env';
import {Todo} from '@/models';

export const mysqlConfig: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Todo],
  logging: 'all',
};
