import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { HighlightDirective } from './directives/highlight.directive';
import { Filter1Pipe } from './filters/filter1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    HighlightDirective,
    Filter1Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
