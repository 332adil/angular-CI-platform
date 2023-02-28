import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'paginate'
})
export class Paginate implements PipeTransform{

    obj : {currentPage : number, itemPerPage : number, totalItem : number, arr : any[]};

    transform(value: any, ...args: any[]) {
        this.obj = args[0];
        let start : number, end : number;
        start = (this.obj.currentPage -1) * this.obj.itemPerPage;
        end = Math.min((start + this.obj.itemPerPage), this.obj.totalItem);

        let res : any[] = [];
        for(let i = start; i < end; i++){
            res.push(this.obj.arr[i]);
        }
        return res;
    }
}