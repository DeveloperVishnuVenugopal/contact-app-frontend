import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontacts: any,searchkey: string,key:string): any[] {
    const result:any=[]
    if(!allcontacts || searchkey ==""  || key ==""){
      return allcontacts
    }
    allcontacts.forEach((item:any) => {
      if(item[key].trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
        result.push(item)
      }
    });
    return result;
  }

}
