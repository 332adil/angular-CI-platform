import { Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "src/app/shared/app.config";
import { MissionSkills } from "./mssion-skills.model";

@Injectable({'providedIn' : 'root'})
export class MissionSkillsService {
    url = AppConfig.jsonUrl + 'mission-skills';

    constructor(private http : HttpClient){}

    getAll(){
        return this.http.get<MissionSkills[]>(this.url);
    }

    getById(id : number){
        return this.http.get<MissionSkills>(this.url+"/"+id);
    }

    add(obj : MissionSkills){
        this.http.post(this.url, obj).subscribe(res => {
            console.log(res);
        });
    }

    update(id : number, obj : MissionSkills){
        this.http.patch(this.url+'/'+id, obj).subscribe(res => {
            console.log(res);
        });
    }

    delete(id : number){
        this.http.delete(this.url+"/"+id).subscribe(res => {
            console.log(res);
        })
    }
}