import { Language } from "./Language";


export class Worker
{  
    id: number =0;
    name: string ="";
    beginYear ?: Date;
    lastUpdateDate ?: Date;
    languages: Language[] =[];
}
