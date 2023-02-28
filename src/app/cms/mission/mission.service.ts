import { Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "src/app/shared/app.config";
import { Mission } from "./mission.model";
import { Rating } from 'src/app/shared/rating.module';
import { Volunteer } from 'src/app/platform-landing/volunteer.model';
import { Comments } from 'src/app/platform-landing/mission/mission-detail/comments.model';
import { Subject } from 'rxjs';

@Injectable({'providedIn' : 'root'})
export class MissionService {
    url = AppConfig.jsonUrl+"mission";
    commentChanged = new Subject<boolean>();

    constructor(private http : HttpClient){}

    add(mission : Mission){
        mission.enter_date = new Date();
        this.http.post(this.url, mission).subscribe(res => {
            console.log(res);
        });
    }

    getAll(){
        return this.http.get<Mission[]>(this.url);
    }

    getById(id : number){
        return this.http.get<Mission>(this.url+"/"+id);
    }

    update(id : number, mission : Mission){
        this.http.patch(this.url+"/"+id, mission).subscribe(res => {
            console.log(res);
        });
    }

    getRatings(id : number, missionId : number){
        console.log('id = '+id+' , missionId = '+missionId);
        return this.http.get<Rating[]>(AppConfig.jsonUrl+"rating?userId="+id+"&missionId="+missionId);
    }

    getRatingByMissionId(id : number){
        return this.http.get<Rating[]>(AppConfig.jsonUrl+"rating"+"?missionId="+id);
    }

    updateRating(id : number, rating : Rating){
        this.http.patch(AppConfig.jsonUrl+"rating/"+id, rating).subscribe(res => {
            console.log(res);
        });
    }

    apply(userId : number, missionId : number){
        return this.http.post<Volunteer>(AppConfig.jsonUrl+"volunteer", {
            "missionId" : missionId,
            "userId" : userId,
            "appliedDate" : new Date()
        });
    }

    checkApply(userId : number, missionId : number){
        return this.http.get<Volunteer>(AppConfig.jsonUrl+"volunteer?userId="+userId+"&missionId="+missionId);
    }

    getVolunteersByMission(missionId : number){
        return this.http.get<Volunteer[]>(AppConfig.jsonUrl+"volunteer?missionId="+missionId);
    }

    addComment(comment : Comments){
        this.http.post(AppConfig.jsonUrl+"comments", comment).subscribe(res => {
            console.log(res);
        });
        this.commentChanged.next(true);
    }

    getCommentsByMission(missionId : number){
        return this.http.get<Comments[]>(AppConfig.jsonUrl+"comments?missionId="+missionId);
    }

    addRating(rating : Rating){
        this.http.post(AppConfig.jsonUrl+"rating", rating).subscribe(res => {
            console.log(res);
        })
    }

    search(inp : string){
        return this.http.get<Mission[]>(this.url+"?q="+inp);
    }

    sortByNewest(type : string){
        type = type == '1' ? 'desc' : 'asc';
        return this.http.get<Mission[]>(this.url+'?_sort=enter_date&_order='+type);
    }
}