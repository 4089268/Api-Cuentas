import { DataSource } from "typeorm";
import { AppDataSource, DB_HOST, DB_NAME } from "../config/data.source";
import { logger } from "../utils/logger";

export const mySqlConnection = async () :Promise<DataSource> => {
    try{
        logger.info(`DB_Host: ${DB_HOST}`);
        logger.info(`DB_Name: ${DB_NAME}`);
        return await AppDataSource.initialize();
    }catch(error){
        console.log(error);
        throw new Error(`Error al tratar de conectarse a mysql`);
    }
};