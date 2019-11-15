import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

export class ProductService {
    formDataProduct : Product;

    listProduct : Product[];

    products : Product[];
    
    product : Product;

    private API : string = 'http://localhost:60797/api/';

    constructor(private http: HttpClient) { }
    
    getProduct()
    {
       this.http.get(this.API + 'products')
       .toPromise()
       .then(res => this.listProduct = res as Product[]);
       console.log(this.listProduct.shift());
    }


    findid(id: number): Observable<Product> {

        return this.http.get<Product>(this.API + 'products/' + id).pipe(map(res => {
            //console.log(res);
            return res;
        }));;
    }

    getProductById(id : number)
    {
        this.http.get(this.API + 'products/' + id)
        .toPromise()
        .then(res=>this.products = res as Product[]);
    }

    postProduct()
    {
        return this.http.post(this.API + 'products', this.formDataProduct);
    }

    putProduct()
    {
        return this.http.put(this.API + 'products/'+this.formDataProduct.ProductId, this.formDataProduct);
    }

    deleteProduct(id)
    {
        return this.http.delete(this.API + 'products/'+ id);
    }
}