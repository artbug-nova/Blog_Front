import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { isRegExp } from 'util';

const UrlServer = "http://localhost:9000/";

@Injectable()
export class servicePost{
    constructor(private http: HttpClient){}

    public getData(url:string) {
        return this.http.get(UrlServer + url);
    }
}