import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { mySqlConnection } from "../db/mysql.config";

export class BaseService <T extends ObjectLiteral> {
    public repository : Promise< Repository<T>>;

    constructor( entity : EntityTarget<T>){
        this.repository = this.initRepository(entity);
    }

    async initRepository<T extends ObjectLiteral>( entity : EntityTarget<T> ) {
        var dataSource = await mySqlConnection();
        return dataSource.getRepository(entity);
    }
    
}