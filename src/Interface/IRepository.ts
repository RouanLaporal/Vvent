import { ICreateResponse } from "./ICreateResponse";
import { IDeleteResponse } from "./IDeleteResponse";
import { IUpdateResponse } from "./IUpdateResponse";

export interface IRepository<T, K>{
    read() : Promise<Readonly<T[]>>;
    readById(id: K): Promise<Readonly<T>>;
    create(entity: T): Promise<ICreateResponse>;
    update(entity: T): Promise<IUpdateResponse>;
    delete(entity: T): Promise<IDeleteResponse>;
}