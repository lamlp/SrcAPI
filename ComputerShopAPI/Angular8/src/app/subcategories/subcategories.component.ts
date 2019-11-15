import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from '../services/subcategory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styles: []
})
export class SubcategoriesComponent implements OnInit {

  constructor(private service : SubCategoryService, private activatedRoute : ActivatedRoute) { }
  
  ngOnInit() {
    let id = (+this.activatedRoute.snapshot.params['id']);
    this.getProductbyId(id);
    this.service.getSubCategory();
  }
  
  getProductbyId(id : number){
    this.service.getProductBySubCategoryId(id);
  }
}
