import { Column, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { PagoEntity } from "../../pagos/entities/pagos.entity";

@Entity({name: "cuentas"})
export class CuentaEntity {

    @PrimaryColumn({name : "id_padron"})
    idPadron! : number;
    
    @Column({ type: "int", width: 11 })
    cuenta! : number;
    
    @Column({ type: "varchar", width: 150 })
    usuario! : string;
    
    @Column({ type: "int", width: 11 })
    sb! : number;

    @Column({ type: "int", width: 11 })
    sec! : number;

    @Column({ type: "varchar", width: 20 })
    medidor? : string;

    @Column({ type: "varchar", width: 20 })
    periodo? : string; 

    @Column({ type: "decimal", precision: 12, scale : 4, default: 0 })
    saldo! : number;

    @Column({name: "ultima_actualizacion"})
    @UpdateDateColumn()
    ultimaActualizacion! : Date;

    @OneToMany( () => PagoEntity, (pago) => pago.cuenta )
    pagos! : PagoEntity[];

} 