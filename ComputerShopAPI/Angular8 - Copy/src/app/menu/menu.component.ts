import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { SubCategoryService } from '../services/subcategory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor(private service_category : CategoryService, private service_subcategory : SubCategoryService) { }

  ngOnInit() {
    this.service_category.getCategory();
    this.service_subcategory.getSubCategory();
  }

  filterSubcategory(type : any){
    if (this.service_subcategory.listSubCategory)
    return this.service_subcategory.listSubCategory.filter(x => x.CategoryId == type);
  }
}
