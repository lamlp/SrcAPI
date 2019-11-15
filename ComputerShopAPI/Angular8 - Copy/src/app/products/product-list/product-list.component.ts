import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from "src/app/services/product.service";



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getProduct();
  }

  populateForm(pd:Product){
    this.service.formDataProduct= Object.assign({},pd);
  }

  onDelete(ProductId)
  {
    if (confirm('Are you sure?'))
    this.service.deleteProduct(ProductId)
    .subscribe(
      res=>{
        this.service.getProduct();
        alert('Delete success');
      },
      err=>{
        console.log(err);
      }
    )
  }

}
