import App from './app';
import BaseRoute from './routes/base.route';

const app = new App([new BaseRoute()]);
app.listen();