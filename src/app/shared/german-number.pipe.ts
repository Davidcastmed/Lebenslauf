import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'germanNumber'
})
export class GermanNumberPipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString('de-DE', { minimumFractionDigits: 2 });
  }

}
