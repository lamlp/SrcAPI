import { Component, OnInit } from '@angular/core';
import { ComputerShopApiService } from 'src/app/shared/computershopapi.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  constructor(private service: ComputerShopApiService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if (form != null)
    form.resetForm();
    this.service.formDataProduct = {
      ProductId: 0,
      ProductName: '',
      Image: '',
      Price: 0,
      Descriptions: '',
      SubCategoryId: 0
    }
  }

  onSubmit(form:NgForm)
  {
    if (this.service.formDataProduct.ProductId==0)
    this.insertValue(form);
    else 
    this.updateValue(form);
  }

  insertValue(form: NgForm){
    this.service.postProduct().subscribe(
      res => {
        this.resetForm(form);
        alert('Add success');
        this.service.getProduct();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateValue(form: NgForm){
    this.service.putProduct().subscribe(
      res => {
        this.resetForm(form);
        alert('Edit success');
        this.service.getProduct();
      },
      err => {
        console.log(err);
      }
    )
  }

}
