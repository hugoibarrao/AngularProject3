import { pipe } from "rxjs";
import { Component, Pipe, PipeTransform } from '@angular/core';
@Pipe({

  name: 'customUpperxxx'
})

 
export class customPipe implements PipeTransform {
  

  transform(value: any) {
    return value.toUpperCase() ;
        throw new Error("Method not implemented.");
    }

}
