
import { Injectable } from '@angular/core';
import { Products } from './models/products';
import { Observable } from 'rxjs';
import { ProductsComponent } from './products/products.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  url = 'https://63c99464904f040a96613c22.mockapi.io/v1/products'

  getAll(){
    return this.http.get<Products[]>(this.url);
  }

  getById(id : number){
    return this.http.get<Products>(`${this.url}/${id}`)
  } 

  post(products: Products){
    return this.http.post<Products>(`${this.url}`, products)
  }

  put(id: number, products: Products){
    return this.http.put<Products>(`${this.url}/${id}`, products)
  }

  delete(id: number){
    return this.http.delete<Products>(`${this.url}/${id}`)
  }
}
