import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  constructor(private httpService: ProductsService) {}
  products: Products[] = [];
  product: Products = new Products();
  showDetails: boolean;
  productId: number;
  filter: string = "";
  
  ngOnInit(){
    this.get();
  }

  get(){
    this.httpService.getAll().subscribe((data) => {
      this.products = data;
    })
  }

  deleteData(id: number){
    if(confirm("Sigurno?")){
    this.httpService.delete(id).subscribe(() => {
      this.get();
    })
    }
  }

  showProductDetails(productId: number){
    this.productId = productId;
    this.showDetails = true;
  }

  onProductConfirm(prikaz: boolean){
    this.showDetails = prikaz;
    this.get();
  }

  // postProduct(product: Products){
  //   this.httpService.post(product).subscribe((data) =>{
  //     this.product = data;
  //   })
  //   this.showDetails = true;
  // }
  }

