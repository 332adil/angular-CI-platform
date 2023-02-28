import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';
import { AppConfig } from '../shared/app.config';
import { AuthUser } from './auth.user';

@Injectable()
export class AuthenticationService {

    url : string = AppConfig.jsonUrl;
    user : AuthUser = null;
    userChanged = new Subject<AuthUser>();

    constructor(private http : HttpClient){}
    
    registerUser(user : AuthUser){
        this.http.post(this.url+'user', user).subscribe(res => {
            console.log(res);
        });
    }

    login(email : string, password : string){
        this.http.get<AuthUser>(this.url+'user?email='+email+'&password='+password).subscribe(res => {
            this.user = res;
            localStorage.setItem("user", JSON.stringify(res));
            this.userChanged.next(this.user);
        });
    }

    logout(){
        this.user = null;
        this.userChanged.next(null);
    }

    autoLogin(){
        const userData = JSON.parse(localStorage.getItem("user"));
        this.user = userData[0];
        this.userChanged.next(this.user);
    }

    resetPassword(id : number,password : string){
        this.http.patch(this.url+'user/'+id, {
            password : password
        }).subscribe(res => {
            console.log(res);
        })
    }

    getUpdatedUserData(id : number){
        this.http.get<AuthUser>(this.url+'user/'+id).subscribe(res => {
            this.user = res;
            localStorage.setItem("user", JSON.stringify(res));
        });
    }

    updateUser(id : number, user : AuthUser){
        this.http.patch<AuthUser>(this.url+'user/'+id, user).subscribe(res => {
            this.user = res;
            localStorage.setItem("user", JSON.stringify(res));
            this.userChanged.next(res);
        })
    }

    getAllUser(){
        return this.http.get<AuthUser[]>(this.url+"user");
    }

    getUserById(id : number){
        return this.http.get<AuthUser>(this.url+"user/"+id);
    }
}