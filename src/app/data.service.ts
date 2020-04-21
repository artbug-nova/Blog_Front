import { LogService } from './log.service';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService{
    private data: string[] = [ "Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9"];
      
    constructor(private logService:LogService){ }

    getData(): string[] {
        this.logService.write("getData")  
        return this.data;
    }
    addData(name: string){
          
        this.data.push(name);
        
    }
}