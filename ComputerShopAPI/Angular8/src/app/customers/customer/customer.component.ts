import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if (form != null)
      form.resetForm();
    this.service.formDataCustomer = {
      CusId: 0,
      Account: '',
      Password: '',
      CusName: '',
      BirthDay: new Date(),
      Gender: false,
      PersonalId: '',
      Address: '',
      PhoneNumber: '',
      Email: '',
      CusType: false

    }
  }

  onSubmit(form:NgForm)
  {
    if (this.service.formDataCustomer.CusId==0)
    this.insertValue(form);
    else 
    this.updateValue(form);
  }

  insertValue(form: NgForm) {
    this.service.postCustomer().subscribe(
      res => {
        this.resetForm(form);
        alert('Add success');
        this.service.getCustomer();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateValue(form: NgForm){
    this.service.putCustomer().subscribe(
      res => {
        this.resetForm();
        alert('Edit success');
        this.service.getCustomer();
      },
      err => {
        console.log(err);
      }
    )
  }

}
