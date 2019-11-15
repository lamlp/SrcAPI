import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: []
})
export class CategoryComponent implements OnInit {

  constructor(private service : CategoryService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if (form != null)
    form.resetForm();
    this.service.formDataCategory = {
      CategoryId: 0,
      CategoryName: ''
    }
  }

  onSubmit(form:NgForm)
  {
    if (this.service.formDataCategory.CategoryId==0)
    this.insertValue(form);
    else 
    this.updateValue(form);
  }

  insertValue(form: NgForm) {
    this.service.postCategory().subscribe(
      res => {
        this.resetForm(form);
        alert('Add success');
        this.service.getCategory();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateValue(form: NgForm){
    this.service.putCategory().subscribe(
      res => {
        this.resetForm(form);
        alert('Edit success');
        this.service.getCategory();
      },
      err => {
        console.log(err);
      }
    )
  }

}
