import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';

@Injectable({
    providedIn: 'root'
  })

export class CustomerService {
    formDataCustomer : Customer;

    listCustomer : Customer[];

    private API : string = 'http://localhost:60797/api/';

    constructor(private http: HttpClient) { }
    
    getCustomer()
    {
       this.http.get(this.API + 'customers')
       .toPromise()
       .then(res => this.listCustomer = res as Customer[]);
    }

    getCustomerById(id : number)
    {
        this.http.get(this.API + 'customers/' + id)
       .toPromise()
       .then(res => this.listCustomer = res as Customer[]);
    }

    postCustomer()
    {
        return this.http.post(this.API + 'customers', this.formDataCustomer);
    }

    putCustomer()
    {
        return this.http.put(this.API +'customers/'+this.formDataCustomer.CusId, this.formDataCustomer);
    }

    deleteCustomer(id)
    {
        return this.http.delete(this.API + 'customers/' + id);
    }
}