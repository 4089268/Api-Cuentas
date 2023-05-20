import express from "express";
import displayRoutes from "express-routemap";
import {API_VERSION, LOG_FORMAT, NODE_ENV, PORT} from "./config/config";
import {Routes} from "./interfaces/route.interface";
import morgan from "morgan";
import hpp from "hpp";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { stream } from './utils/logger'
import corsConfig from "./config/coors.config";
import cors from "cors";
import { mySqlConnection } from "./db/mysql.config";


class App {
    public app: express.Application;
    public env: string;
    public port: number;
    public server: any;

    constructor(routes: Routes[]){
        this.app = express();
        this.env = NODE_ENV || "development";
        this.port = Number(PORT) || 50001;

        this.connectToDataBase();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSwagger();
        this.initializeErrorHandling();
    }

    public initializeRoutes(routes: Routes[]){
        routes.forEach( (route) => {
            this.app.use(`/api/${API_VERSION}`, route.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
          displayRoutes(this.app);
          console.log(`====================================`);
          console.log(`========= ENV: ${this.env} =========`);
          console.log(`🚀 App listening on the port ${this.port}`);
          console.log(`====================================`);
        });
    }

    public getServer(){
        return this.app;
    }

    private connectToDataBase(){
        mySqlConnection();
    }

    public closeServer(done?: any){
        this.server = this.app.listen(this.port, () => {
            done;
        });
    }

    public initializeMiddlewares(){
        this.app.use(morgan(LOG_FORMAT ?? "../logs", { stream }));
        this.app.use(cors(corsConfig));
        this.app.use(hpp());
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(cookieParser());
        
    }

    private initializeSwagger(){
        //TODO: init Swagger
    }

    private initializeErrorHandling(){
        //TODO: Configure error handling
    }

}

export default App;