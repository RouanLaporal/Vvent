import mysql,{ Pool } from "mysql2/promise";

export class Database{
    private static pool: Pool;

    static get Connection(): Pool{
        if(!this.pool){
            this.pool = mysql.createPool({
                host: process.env.DB_HOST || 'localhost',
                port: 3310,
                user: process.env.DB_USER || 'root',
                database: process.env.DB_DATABASE || 'VventDev',
                password: process.env.DB_PASSWORD || 'database-dev-password',
            })
        }
        return this.pool;
    }
}