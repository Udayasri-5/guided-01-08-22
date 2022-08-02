import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { Router,RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const route : Routes = [
  {path:'',component:MainpageComponent} , 
  {path : 'product',component : ProductListComponent } , 
  {path : 'productCategories' , component : CategoryListComponent},
  {path : 'productform' , component : ProductFormComponent},
  {path : 'buyergrid',component : BuyerComponent},
  {path : 'merchant',component : ProductpageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent,
    MainpageComponent,
    ProductFormComponent,
    BuyerComponent,
    ProductpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
