import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';
import { SubCategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: []
})
export class CategoryListComponent implements OnInit {

  constructor(private service: CategoryService, private subcategoryservice : SubCategoryService) { }

  ngOnInit() {
    this.service.getCategory();
  }

  populateForm(pd:Category){
    this.service.formDataCategory= Object.assign({},pd);
  }

  onDelete(CategoryId)
  {
    if (confirm('Are you sure?'))
    this.service.deleteCategory(CategoryId)
    .subscribe(
      res=>{
        this.service.getCategory();
        this.subcategoryservice.getSubCategory();
        alert('Delete success');
      },
      err=>{
        console.log(err);
      }
    )
  }

}
