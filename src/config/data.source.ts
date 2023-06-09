import { DataSource, DataSourceOptions } from "typeorm";
import { join } from "path";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'development'}`});
export const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

const configDBConnection : DataSourceOptions = {
    type: "mysql",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    synchronize: false,
    migrationsRun: false,
    logging : false,
    entities: [ join(__dirname, "../**/*.entity{.ts,.js}")],
    migrations: [ join(__dirname, "../**/*.migration{.ts,.js}")],
    subscribers: [ join(__dirname, "../**/*.subscriber{.ts,.js}")],
    namingStrategy: new SnakeNamingStrategy()
};

export const AppDataSource : DataSource = new DataSource ( configDBConnection );
