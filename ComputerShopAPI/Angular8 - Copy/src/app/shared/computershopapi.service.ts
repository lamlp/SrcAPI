import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, Customer } from './computershopapi.model'

@Injectable({
    providedIn: 'root'
  })

export class ComputerShopApiService {
    formDataProduct : Product;
    formDataCustomer : Customer;

    listProduct : Product[];
    listCustomer : Customer[];

    private API : string = 'http://localhost:60797/api/';

    constructor(private http: HttpClient) { }

    getProduct()
    {
       this.http.get(this.API + 'products')
       .toPromise()
       .then(res => this.listProduct = res as Product[]);
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

    getCustomer()
    {
       this.http.get(this.API + 'customers')
       .toPromise()
       .then(res => this.listCustomer = res as Customer[]);
    }
}