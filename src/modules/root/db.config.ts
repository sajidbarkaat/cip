import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

const dbConfig: SqlServerConnectionOptions = {
    type: 'mssql',
    host: 'localhost',    
    username: 'sa',
    password: 'sajidbarkaat',
    database: 'tu',
    synchronize: true,
    logging: true,
    options: { encrypt: false },
    // migrationsTableName: "tu_migrations",
    // entities:[`${__dirname}/../**/entities/**.entity{.ts,.js}`],
    // migrations: [`$/../../../migration}`]
};

export default dbConfig;