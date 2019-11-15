import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from 'src/app/services/subcategory.service';
import { SubCategory } from 'src/app/models/subcategory.model';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styles: []
})
export class SubCategoryListComponent implements OnInit {

  constructor(private service: SubCategoryService) { }

  ngOnInit() {
    this.service.getSubCategory();
  }

  populateForm(pd:SubCategory){
    this.service.formDataSubCategory= Object.assign({},pd);
  }

  onDelete(SubCategoryId)
  {
    if (confirm('Are you sure?'))
    this.service.deleteSubCategory(SubCategoryId)
    .subscribe(
      res=>{
        this.service.getSubCategory();
        alert('Delete success');
      },
      err=>{
        console.log(err);
      }
    )
  }

}
