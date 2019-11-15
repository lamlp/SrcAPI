import { Injectable } from '@angular/core';
import { SubCategory } from '../models/subcategory.model';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})


export class SubCategoryService{

    constructor( private http:HttpClient ){}

    listSubCategory : SubCategory[];

    formDataSubCategory : SubCategory;

    listProduct : Product[];

    private API : string = 'http://localhost:60797/api/';

    getSubCategory(){
        this.http.get(this.API+'subcategories')
        .toPromise()
        .then(res=> this.listSubCategory = res as SubCategory[]);
    }

    getProductBySubCategoryId(id : number){
        this.http.get(this.API+'subcategories/'+ id)
        .toPromise()
        .then(res=>this.listProduct = res as Product[]);
    }

    postSubCategory()
    {
        return this.http.post(this.API + 'subcategories', this.formDataSubCategory);
    }

    putSubCategory()
    {
        return this.http.put(this.API + 'subcategories/' + this.formDataSubCategory.SubCategoryId, this.formDataSubCategory);
    }

    deleteSubCategory(id)
    {
        return this.http.delete(this.API + 'subcategories/'+ id);
    }
}