import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string, fields: string[]): any[] {
    
    if (!items || !searchTerm || searchTerm.length === 0 || !fields || fields.length === 0) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter(item => {
      for (const field of fields) {
        if (item.hasOwnProperty(field) && typeof item[field] === 'string') {
          if (item[field].toLowerCase().includes(searchTerm)) {
            return true; 
          }
        }

        if (item.hasOwnProperty(field) && typeof item[field] === 'number') {
            if (item[field].toString().includes(searchTerm)) {
                return true;
            }
        }
      }
      return false; 
    });
  }

}
