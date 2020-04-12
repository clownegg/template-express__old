import {createConnection} from 'typeorm';

import {app} from '@/server';
import {mysqlConfig} from '@/config';

createConnection(mysqlConfig)
  .then(async () => {
    app.listen(app.get('port'), () => {
      console.info(`Listening Server on ${app.get('port')}`);
    });
  })
  .catch((error) => {
    console.info(error);
    throw error;
  });
