import {app} from '@/server';

app.listen(app.get('port'), () => {
  console.info(`Listening Server on ${app.get('port')}`);
});
