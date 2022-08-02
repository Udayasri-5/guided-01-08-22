import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  constructor(private service : ProductServicesService,private route: Router,private activeRoute : ActivatedRoute) { }

  formModel : Product = new Product(0,"","",0,"",0,0,new Date,new Date,0,"");


  ngOnInit(): void {
    this.listOfProducts()
    this.activeRoute.paramMap.subscribe(() =>{
      this.listOfProducts()});
  }
  listOfProducts(){
    this.service.getAllProducts().subscribe(data=>{
      console.log(data); 
      this.products = data;
    })
  }
  

  backtoHome(){
    this.route.navigateByUrl("/")
  }

  addProduct(){
    this.route.navigateByUrl("/productform")
  }

}
