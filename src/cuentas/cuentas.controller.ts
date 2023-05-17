import { Request, Response } from "express";
import { logger } from "../utils/logger";

class CuentasController {

    constructor(){
    }

    public obtenerCuentas = async ( _req: Request, res: Response) => {
        return res.status(200).json ({
            ok: true,
            message: "Listado de cuentas "
        });
    }

    public obtenerDetalleCuenta = async (req: Request, res: Response) => {
        logger.info(`Obtener detalle cuenta id: ${req.params.id}`);
        var { id: _idCuenta} = req.params;
        return res.status(200).json ({
            ok: true,
            message: "Obtener detalle de la cuenta "
        });
    }

    public agregarCuenta = async (_req: Request, res: Response) => {
        return res.status(200).json ({
            ok: true,
            message: "Agregar cuenta "
        });
    }

    public actualizarCuentaPorId = async (req: Request, res: Response) => {
        logger.info(`Actualiar cuenta id: ${req.params.id}`);
        var { id: _idCuenta} = req.params;
        return res.status(200).json ({
            ok: true,
            message: "Actualizar cuenta"
        });
    }

}

export default CuentasController;