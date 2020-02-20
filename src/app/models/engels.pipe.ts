import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'engels'
})
export class EngelsPipe implements PipeTransform {

  transform(value: boolean): string {
    let output: string = '';
    if (value === true){
      output = "Ja";
    }
    else{
      output = "Nee"
    }
    return output;
  }

}
