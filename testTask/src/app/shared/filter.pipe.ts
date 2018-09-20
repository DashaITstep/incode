import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string, category:string, field: string, field2: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter( it => {
            return it[category][field].toLowerCase().includes(searchText) || it[category][field2].toLowerCase().includes(searchText);
        });
    }
}