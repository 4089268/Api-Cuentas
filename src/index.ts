import App from './app';
import BaseRoute from './routes/base.route';
import CuentasRoute from './routes/cuentas.routes';
import UserRoute from './routes/user.routes';

const app = new App([
    new BaseRoute(),
    new UserRoute(),
    new CuentasRoute()
]);

app.listen();