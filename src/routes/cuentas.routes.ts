import { Router } from "express";
import { Routes } from "../interfaces/route.interface";

import CuentasController from "../cuentas/cuentas.controller";

class CuentasRoute implements Routes {
    public path = "/cuentas";
    public router = Router();
    public cuentasController = new CuentasController();

    constructor(){
        console.log(`(-) Inicializando cuentas Route`);
        this.initCuentasRoute();
    }

    private initCuentasRoute(){
        this.router.get( `${this.path}`, this.cuentasController.obtenerCuentas);
        this.router.get( `${this.path}/:id`, this.cuentasController.obtenerDetalleCuenta );
        this.router.post( `${this.path}`, this.cuentasController.agregarCuenta );
        this.router.put( `${this.path}/:id`, this.cuentasController.actualizarCuentaPorId);
        this.router.delete( `${this.path}/:id`, this.cuentasController.eliminarCuentaPorId);
    }

}

export default CuentasRoute;