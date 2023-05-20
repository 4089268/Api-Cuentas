import { CuentaEntity } from "./entities/cuenta.entity";
import { BaseService } from "../config/base.services";
import { CuentaDTO } from "./entities/cuenta.dto";

export class CuentasService extends BaseService<CuentaEntity> {
    constructor(){
        super(CuentaEntity);
    }

    public async obtenerCuentas() : Promise<CuentaEntity[]>{
        const cuentas =  await (await this.repository).find();
        return cuentas;
    }

    public async obtenerCuentaPorIdPadron ( idPadron : number) : Promise<CuentaEntity | null> {
        const cuenta = await (await this.repository).findOneBy( { idPadron : idPadron } );
        return cuenta;
    }

    public async agregarCuenta( cuenta : CuentaDTO ) : Promise<CuentaEntity> {
        const cuentaNueva = await (await this.repository).create(cuenta);
        var cuentaGen = await (await this.repository).save(cuentaNueva);
        return cuentaGen;
    }

    public async actualizarCuenta( idPadron: number,  cuentaUpdate : CuentaDTO) : Promise<boolean> {

        // Comprobar si existe el id_padron
        var cuenta : CuentaEntity | null = await( await this.repository).findOneBy({ idPadron: idPadron}); 
        if(cuenta == null){
            return false;
        }

        // Realizar la actualizacion
        const results = await (await this.repository)
            .createQueryBuilder()
            .update()
            .set({
                usuario: cuentaUpdate.usuario,
                sb: cuentaUpdate.sb,
                sec: cuentaUpdate.sec,
                medidor: cuentaUpdate.medidor,
                periodo: cuentaUpdate.periodo,
                saldo: cuentaUpdate.saldo
            })
            .where( "idPadron = :id",{id: idPadron})
            .execute();
        
        // Validar resultados
        if(results.affected == null || results.affected == undefined){
            return false;
        }else{
            return true;
        }
    }

    public async eliminarCuenta( idPadron : number) : Promise<boolean> {
        var cuenta = await (await this.repository).findOneBy({idPadron  : idPadron});
        if(cuenta == null){
            return true;
        }
        const results = await (await this.repository).delete( cuenta);
        if(results.affected == null || results.affected == undefined){
            return false;
        }else{
            return results.affected > 0
        }
    }

}