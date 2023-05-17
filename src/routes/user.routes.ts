import { Router, Response, Request } from "express";
import { Routes } from "../interfaces/route.interface";

class UserRoute implements Routes {
    public path = "/users";
    public router = Router();

    constructor(){
        this.initUserRoute();
    }

    private initUserRoute(){
        this.router.get( `${this.path}`, ( _req: Request, res: Response) => {
            return res.json({
                ok: true,
                message: 'List of users'
            });
        });

        
        this.router.get( `${this.path}/:id`, ( req: Request, res: Response) => {
            console.log('parametros del request', req.params);
            const {id : _userId} = req.params;
            return res.json({
                ok: true,
                message: 'Users detail'
            });
        });

    }

}

export default UserRoute;