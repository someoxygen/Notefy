import { User } from "./user";

export class Note {
    id:number = 0;
    name:string = '';
    note:string = '';
    noteDate:Date = new Date();
    userId:number = 0;
    User:User = new User();
}