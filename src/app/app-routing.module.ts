import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Products } from './models/products';
import { ProductsService } from './products.service';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';

const routes: Routes = [
  // {path: '',component:ProductsComponent},
  // {path: 'products', component:ProductsComponent},
  // {path: 'add', component:ProductsDetailsComponent},
  // {path: 'products/:id', component:ProductsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
