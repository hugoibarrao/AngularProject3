import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullpipe'
})
export class NullpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
