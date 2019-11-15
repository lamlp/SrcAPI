import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {
  

  constructor(private service : ProductService, private activatedRoute : ActivatedRoute) { }


  ngOnInit() {

    let id = (+this.activatedRoute.snapshot.params['id']);
  
    /* this.service.findid(id).subscribe(data=>{
    this.pd = data; })*/
    this.service.getProductById(id);

};

}
