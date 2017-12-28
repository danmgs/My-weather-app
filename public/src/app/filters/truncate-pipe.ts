import { Pipe, PipeTransform } from '@angular/core';
/*
 *Shorten a value.
*/
@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
    transform(value: string, limit?: number): string {
        if (limit === undefined) { limit = 20; }
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
}
