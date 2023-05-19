import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { CuentaEntity } from "../../cuentas/entities/cuenta.entity";

@Entity({name: "opr_pagos"})
export class PagoEntity {

    @PrimaryColumn({name : "codigo_pago"})
    codigoPago! : number;
    
    @Column({ type: "decimal", width: 12.4 })
    abono! : number;
    
    @Column({ type: "varchar", width: 250 })
    message! : string;

    @Column({ type: "varchar", width: 250 })
    referencia? : string; 

    @Column({ type: "bit"})
    exito! : number;

    @Column()
    fecha! : Date;

    @ManyToOne( () => CuentaEntity, (cuenta) => cuenta.pagos )
    @JoinColumn({name: "id_padron"})
    cuenta! : CuentaEntity;

    public constructor(){
    }

} 