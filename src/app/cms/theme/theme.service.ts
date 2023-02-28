
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { AppConfig } from 'src/app/shared/app.config';
import { Theme } from './mission-theme.component';

@Injectable({'providedIn' : 'root'})
export class ThemeService {

    url : string = AppConfig.jsonUrl + 'theme';

    constructor(private http : HttpClient){}

    getAll(){
        return this.http.get<Theme[]>(this.url);
    }

    getById(id : number){
        return this.http.get<Theme>(this.url + '/' + id);
    }

    add(theme : Theme){
        this.http.post(this.url, theme).subscribe(res => {
            console.log(res);
        })
    }

    update(id : number, theme : Theme){
        this.http.patch(this.url+'/'+id, theme).subscribe(res => {
            console.log(res);
        })
    }

    delete(id : number){
        this.http.delete(this.url+'/'+id).subscribe(res => {
            console.log(res);
        })
    }
}