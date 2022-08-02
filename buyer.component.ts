import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  display = "none";
  products : Product[]
  constructor(private service : ProductServicesService,private route : Router) { }

  ngOnInit(): void {
    this.listOfProducts()
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

  openModal() {
  //  const modRef = this.service.getAllProducts();
   // modRef.productId;
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
    
  }
  

}
