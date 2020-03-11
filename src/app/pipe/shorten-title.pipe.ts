import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(value: string):string {
     if(value.length>20){
       return value.substr(0,20)+'....';
     }
     return value;
  }

}
