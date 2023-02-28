import { Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name : 'shorten'
})

export class ShortenPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        let str : string = value;
        if(value.length > 150){
            return str.substring(1,150)+' ...';
        }
        return value;
    }
}