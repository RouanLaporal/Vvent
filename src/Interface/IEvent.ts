export interface IEvent{
    event_id: number;
    date : Date;
    title: string;
    description : string;
    type: string;
}

export type IEventCreate = Omit<IEvent, 'event_id'>
export type IEventRO = Readonly<IEvent>;
export type IEventUpdate = Partial<IEvent>;


