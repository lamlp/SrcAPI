import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { SubCategoryService } from './subcategory.service';

@Injectable({
    providedIn: 'root'
})


export class CategoryService{

    constructor( private http:HttpClient, private subcateservice : SubCategoryService ){}

    listCategory : Category[];

    formDataCategory : Category;

    private API : string = 'http://localhost:60797/api/';

    getCategory(){
        this.http.get(this.API+'categories')
        .toPromise()
        .then(res=> this.listCategory = res as Category[]);
    }
    
    postCategory()
    {
        return this.http.post(this.API + 'categories', this.formDataCategory);
    }

    putCategory()
    {
        return this.http.put(this.API + 'categories/'+this.formDataCategory.CategoryId, this.formDataCategory);
    }

    deleteCategory(id)
    {
        return this.http.delete(this.API + 'categories/'+ id);
    }
}