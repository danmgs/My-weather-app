import { Pipe, PipeTransform } from '@angular/core';
/*
 * Convert a Fahrenheit value to a Degre celsius value.
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | convertToDegre
 * Example:
 *   {{ 80 | convertToDegre }}
*/
@Pipe({name: 'convertToDegre'})
export class ConvertToDegrePipe implements PipeTransform {
  transform(value: number): number {
    return ((value - 32) / 1.8);
  }
}
