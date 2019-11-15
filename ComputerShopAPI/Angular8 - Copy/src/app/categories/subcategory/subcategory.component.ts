import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubCategoryService } from 'src/app/services/subcategory.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styles: []
})
export class SubCategoryComponent implements OnInit {

  constructor(private service : SubCategoryService, private servicecategory : CategoryService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if (form != null)
    form.resetForm();
    this.service.formDataSubCategory = {
      SubCategoryId: 0,
      SubCategoryName: '',
      CategoryId: 0
    }
  }

  onSubmit(form:NgForm)
  {
    if (this.service.formDataSubCategory.SubCategoryId==0)
    this.insertValue(form);
    else 
    this.updateValue(form);
  }

  insertValue(form: NgForm) {
    this.service.postSubCategory().subscribe(
      res => {
        this.resetForm(form);
        alert('Add success');
        this.service.getSubCategory();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateValue(form: NgForm){
    this.service.putSubCategory().subscribe(
      res => {
        this.resetForm(form);
        alert('Edit success');
        this.service.getSubCategory();
      },
      err => {
        console.log(err);
      }
    )
  }

}
