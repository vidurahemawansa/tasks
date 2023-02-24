import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<Task>, searchText: string, filterMetadata: any): any[] {
    if(!items) return [];
    if(!searchText) {
      filterMetadata.count = items.length;
      return items;
    } 

    searchText = searchText.toLowerCase();

    let filteredItems = items.filter( item => {
      return item.name.toLowerCase().includes(searchText);
    });

    filterMetadata.count = filteredItems.length;
    return filteredItems;
  }

}
