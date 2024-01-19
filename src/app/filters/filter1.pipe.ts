import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../models/products';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(products: Products[], filterBy:string): any {
    if(!products|| !filterBy){
      return products;
    }
  return products.filter(products => products.name.toLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1 || 
            products.code.toLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
    }
}
