import { ResultSetHeader } from "mysql2";
import { IEvent, IEventCreate } from "../Interface/IEvent";
import { Database } from "../classes/Database";
import { IRepository } from "../Interface/IRepository";
import { IUpdateResponse } from "../Interface/IUpdateResponse";
import { ICreateResponse } from "../Interface/ICreateResponse";
import { IDeleteResponse } from "../Interface/IDeleteResponse";

export class EventRepository implements IRepository<IEvent, number>{
    
    public async create(body:IEvent): Promise<ICreateResponse>{
        try{
            const database = Database.Connection;
            //TODO: check if event already exist
            const result= await database.execute<ResultSetHeader>('INSERT INTO Event (event_date, event_title, event_description, event_type) VALUES (?,?,?,?)',[body.date,body.title,body.description, body.type]); 
            return{
                insert_id: result[0].insertId,
            }
        }catch (error){
            throw error;
        }
    }

    public async read(): Promise<IEvent[]> {
        try{
            const database = Database.Connection;
            const [result, fields]= await database.execute('SELECT * FROM Event');
            return [
                {
                    event_id: 0,
                    date: result[0].event_date,
                    title: result[0].event_title,
                    description: result[0].event_description,
                    type: result[0].event_type
                }
            ]
        }catch(error){
            throw error;
        }
    }

    public async readById(id: number): Promise<IEvent> {
        return null;
    }
    
    public async update(entity: IEvent): Promise<IUpdateResponse> {
        return{
            rows: 0
        };
    }
    
    public async delete(entity: IEvent): Promise<IDeleteResponse> {
        return{
            delete_id: 0
        }
    }
}