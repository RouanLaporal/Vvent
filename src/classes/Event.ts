import { Organizer } from "./Organizer";
import { Speaker } from "./Speaker";

export class Event{
    private date : Date;
    private title: string;
    private description : string;
    private type: string;
    private organizer: Organizer;
    private speaker: Speaker;


    public setDate(date: Date):void{
        this.date = date;
    }

    public getDate():Date{
        return this.date;
    }

    public setTitle(title:string):void{
        this.title = title;
    }

    public getTitle():string{
        return this.title;
    }

    public setDescription(description:string):void{
        this.description = description;
    }

    public getDescription():string{
        return this.description;
    }

    public setType(type:string){
        this.type = type;
    }

    public getType():string{
        return this.type;
    }

    public setOrganizer(organizer: Organizer):void{
        this.organizer = organizer;
    }

    public getOrganizer():Organizer{
        return this.organizer;
    }

    public setSpeaker(speaker: Speaker):void{
        this.speaker = speaker;
    }

    public getSpeaker():Speaker{
        return this.speaker;
    }

    public createEvent(event:Event):void{
        
    }
}

