import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppConfig } from 'src/app/shared/app.config';
import { CmsPageList } from './cms-list.model';

@Injectable()
export class CmsPageService {

    url : string = AppConfig.jsonUrl+"cms-page";
    cmsPageChanged = new Subject<boolean>();

    constructor(private http : HttpClient){}

    add(obj :CmsPageList){
        delete obj.id;
        this.http.post(this.url,obj).subscribe(res => {
            console.log(res);
        });
    }

    getAll(){
        return this.http.get<CmsPageList[]>(this.url);
    }

    getById(id : number){
        return this.http.get<CmsPageList>(this.url+"/"+id);
    }

    update(id : number, obj : CmsPageList){
        this.http.patch(this.url+"/"+id, obj).subscribe(res => {
            console.log(res);
        });
    }

    delete(id : number){
        this.http.delete(this.url+"/"+id).subscribe(res => {
            console.log(res);
        });
        this.cmsPageChanged.next(true);
    }
}