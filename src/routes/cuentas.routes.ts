import { Router } from "express";
import { Routes } from "../interfaces/route.interface";
import CuentasController from "../cuentas/cuentas.controller";

class CuentasRoute implements Routes {
    public path = "/cuentas";
    public router = Router();
    public cuentasController = new CuentasController();

    constructor(){
        this.initCuentasRoute();
    }

    private initCuentasRoute(){
        this.router.get( `${this.path}`, this.cuentasController.obtenerCuentas);
        this.router.get( `${this.path}/:id`, this.cuentasController.obtenerDetalleCuenta );
        this.router.post( `${this.path}`, this.cuentasController.agregarCuenta );
        this.router.put( `${this.path}/:id`, this.cuentasController. actualizarCuentaPorId);
    }

}

export default CuentasRoute;