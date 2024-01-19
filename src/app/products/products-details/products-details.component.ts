import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../../models/products';
import { ProductsService } from '../../products.service';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit{
  product: Products;

  constructor(private httpService:ProductsService){}

  ngOnInit(): void{
    this.product = new Products();
    if(this.productId > 0){
    this.getById(this.productId);
    }
  }

  @Input()
  productId:number;

  @Output()
  onClose = new EventEmitter<boolean>();
  

  getById(id: number){
    this.httpService.getById(id).subscribe((data) => {
      this.product = data;
    }) 
  } 

  postData(){
    this.httpService.post(this.product).subscribe((data) => {
      this.product = data;
    })
  }

  putData(){
    this.httpService.put(this.productId, this.product).subscribe(() => {
      this.close();
    })
  }

  close(){
    this.onClose.emit(false)
  }

  confirm(){
    if(this.productId>0){
      this.putData();
    this.onClose.emit(false)

    }
    this.postData();
    this.onClose.emit(false)
    
  }
}
