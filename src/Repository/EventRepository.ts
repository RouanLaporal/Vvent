import { ResultSetHeader } from "mysql2";
import { IEventCreate } from "../Interface/IEvent";
import { Database } from "../classes/Database";

export class EventRepository{
    public async createEvent(body:IEventCreate){
        try{
            const database = Database.Connection;
            //TODO: check if event already exist
            const result= await database.execute<ResultSetHeader>('INSERT INTO Event (event_date, event_title, event_description, event_type) VALUES (?,?,?,?)',[body.date,body.title,body.description, body.type]); 
            return{
                event_id: result[0].insertId,
            }
        }catch (error){
            throw error;
        }
    }
}