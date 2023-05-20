import { IsDate, IsNotEmpty, IsOptional } from "class-validator";


export class CuentaDTO {
    
    @IsNotEmpty()
    idPadron! : number;
    
    @IsNotEmpty()
    cuenta! : number;
    
    @IsNotEmpty()
    usuario! : string;
    
    @IsNotEmpty()
    sb! : number;

    @IsNotEmpty()
    sec! : number;

    medidor? : string;

    @IsNotEmpty()
    periodo? : string; 
    
    @IsNotEmpty()
    saldo! : number;

    @IsDate()
    @IsOptional()
    ultimaActualizacion? : Date;

    // @OneToMany( () => PagoEntity, (pago) => pago.cuenta )
    // pagos! : PagoEntity[];
}