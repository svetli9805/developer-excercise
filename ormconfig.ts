import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [process.env.ENTITIES],
    logging: true,
    synchronize: false,
    migrationsRun: true,
    migrations: [process.env.MIGRATIONS],
});
