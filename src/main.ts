import Express from 'express';
import { ServerResponse } from 'http';
import { Database } from './classes/Database';
import { FieldPacket, QueryError, QueryResult, RowDataPacket } from 'mysql2';

const app = Express();

app.get('/', async (request: Express.Request, response: Express.Response) => {
    
    try{
        const connection = Database.Connection;
        const rows = await connection.query<RowDataPacket[]>('SELECT  * FROM Event;');
        response.send(rows[0]);
        await connection.end();
    }catch(error){
        response.send(error);
    }
})

app.listen(3000);