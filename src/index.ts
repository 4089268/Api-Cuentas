import App from './app';
import BaseRoute from './routes/base.route';
import UserRoute from './routes/user.routes';

const app = new App([new BaseRoute(), new UserRoute()]);

app.listen();