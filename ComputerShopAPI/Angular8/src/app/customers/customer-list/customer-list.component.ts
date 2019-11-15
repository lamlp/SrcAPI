import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styles: []
})
export class CustomerListComponent implements OnInit {

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.service.getCustomer();
  }

  populateForm(pd:Customer){
    this.service.formDataCustomer = Object.assign({},pd);
  }

  onDelete(CustomerId)
  {
    if (confirm('Are you sure?'))
    this.service.deleteCustomer(CustomerId)
    .subscribe(
      res=>{
        this.service.getCustomer();
        alert('Delete success');
      },
      err=>{
        console.log(err);
      }
    )
  }
}
