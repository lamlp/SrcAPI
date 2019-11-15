import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-productclient-list',
  templateUrl: './productclient-list.component.html',
  styles: []
})
export class ProductclientListComponent implements OnInit {

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getProduct();
    console.log(this.service.listProduct);
  }

  onAddToCart(a : any){
    console.log(a);
  }

}
