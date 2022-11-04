import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

const dbConfig: SqlServerConnectionOptions = {
    type: 'mssql',
    host: 'localhost',    
    username: 'sa',
    password: 'sajidbarkaat',
    database: 'tu',
    synchronize: false,
    logging: true,
    options: { encrypt: false },
};

export default dbConfig;