import { Request, Response } from "express";
import { CuentasService } from "./cuentas.service";

class CuentasController {

    private readonly cuentasService = new CuentasService();

    constructor(){}

    public obtenerCuentas = async ( _req: Request, res: Response) => {

        const cuentas : any[] = await this.cuentasService.obtenerCuentas();

        return res.json ({
            ok: true,
            message: "Listado de cuentas",
            data : cuentas
        });
    }

    public obtenerDetalleCuenta = async (req: Request, res: Response) => {
        // logger.info(`Obtener detalle cuenta id: ${req.params.id}`);

        var { id: idCuenta} = req.params;

        const cuenta = await this.cuentasService.obtenerDetalleCuenta( Number(idCuenta) );

        return res.json ({
            ok: true,
            message: "Obtener detalle de la cuenta ",
            data: cuenta
        });
    }

    public agregarCuenta = async (req: Request, res: Response) => {

        var { body : cuentaBody } = req.params;

        const cuenta = this.cuentasService.agregarCuenta(cuentaBody);

        return res.json ({
            ok: true,
            message: "Agregar cuenta ",
            data: cuenta
        });
    }

    public actualizarCuentaPorId = async (req: Request, res: Response) => {
        // logger.info(`Actualiar cuenta id: ${req.params.id}`);

        var { body: cuentaBody} = req.params;
        
        const result = await this.cuentasService.actualizarCuentaPorId(cuentaBody);

        if( result){
            return res.json ({
                ok: true,
                message: "Actualizar cuenta"
            });
        }else{
            return res.status(400).json ({
                ok: true,
                message: `No se pudo actualizar la cuenta `
            });
        }
    }

}

export default CuentasController;