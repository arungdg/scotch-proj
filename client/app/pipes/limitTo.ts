import { PipeTransform,  Pipe } from '@angular/core';

@Pipe({name: 'limitTo'})
export class LimitToPipe implements PipeTransform {
    transform(paginationLimit: any, pagesShown = 1, pageSize = 3): any {
        return paginationLimit = pageSize * pagesShown;
        
    }
}
