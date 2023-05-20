import { Request, Response } from "express";
import { CuentasService } from "./cuentas.service";
import { CuentaEntity } from "./entities/cuenta.entity";
import { logger } from "../utils/logger";

class CuentasController {

    private readonly cuentasService = new CuentasService();

    constructor(){}

    public obtenerCuentas = async ( _req: Request, res: Response) => {

        const cuentas : CuentaEntity[] = await this.cuentasService.obtenerCuentas();

        return res.json ({
            ok: true,
            message: "Listado de cuentas",
            data : cuentas
        });
    }

    public obtenerDetalleCuenta = async (req: Request, res: Response) => {
        var { id: idPadron} = req.params;
        const cuenta = await this.cuentasService.obtenerCuentaPorIdPadron( Number(idPadron) );
        return res.json ({
            ok: true,
            message: `Detalle cuenta: ${idPadron}`,
            data: cuenta
        });
    }

    public agregarCuenta = async (req: Request, res: Response) => {
        try{
            logger.info(`(-) Agregando cuenta`);
            const cuentaBody = req.body;
            
            const cuenta = await this.cuentasService.agregarCuenta( cuentaBody );
            return res.json ({
                ok: true,
                message: "Agregar cuenta ",
                data: cuenta
            });

        }catch(err){
            console.dir(err);
            return res.status(500).json({
                message: "Error interno"
            });
        }
    }

    public actualizarCuentaPorId = async (req: Request, res: Response) => {
        try {
            logger.info(`(-) Actualiar cuenta id: ${req.params.id}`);

            // Obtener parametros
            const { id : idPadron } = req.params;
            const { body : cuentaBody } = req;

            // Validar body request
            if(cuentaBody == undefined || cuentaBody == null){
                return res.status(400).json({
                    message: "Bad Request"
                });
            }
            
            // Actualizar cuentas
            const result = await this.cuentasService.actualizarCuenta(Number(idPadron), cuentaBody);

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
        }catch(error){
            logger.error(error);
            return res.status(500).json ({
                message: "Error al actualizar el usuario",
                detail: error
            });
        }

    } 

    public eliminarCuentaPorId = async (req: Request, res: Response) => {
        // logger.info(`Actualiar cuenta id: ${req.params.id}`);
        var {id : idPadron} = req.params;
        
        const result = await this.cuentasService.eliminarCuenta(Number(idPadron) );

        if( result){
            return res.json ({
                ok: true,
                message: `Cuenta: ${idPadron} eliminada`
            });
        }else{
            return res.status(400).json ({
                ok: true,
                message: `No se pudo eliminar la cuenta: ${idPadron}`
            });
        }
    } 

}

export default CuentasController;