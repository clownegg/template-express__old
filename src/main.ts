import {app} from '@/server';

try {
  app.listen(app.get('port'), () => {
    console.info(`Listening Server on ${app.get('port')}`);
  });
} catch (error) {
  throw new Error(error);
}
