export class CuentasService {

    constructor(){}

    public async obtenerCuentas() : Promise<any[]>{
        const cuentas = [
            {
                id : 1,
                cuenta : 1234,
                nombre : "Nombre prueba",
                saldo : 1234.00
            },
            {
                id : 2,
                cuenta : 1234,
                nombre : "Nombre prueba 2",
                saldo : 554.20
            }
        ];

        return cuentas;
    }

    public async obtenerDetalleCuenta ( _idCuenta : number ) : Promise<any> {
     return {
                id : 2,
                cuenta : 1234,
                nombre : "Nombre prueba 2",
                saldo : 554.20
            }; 
    }

    public async agregarCuenta( cuenta : any) : Promise<any> {
        return cuenta;
    }

    public async actualizarCuentaPorId( _cuenta: any) : Promise<boolean> {
        return true;
    }

}