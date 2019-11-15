import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private service: AdminService) { }

  ngOnInit() {
    this.resetForm();
    this.service.checkLogin();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formDataAdmin = {
      Account: '',
      Password: ''
    }
  }


  onLogin(Account: string, Password: string) {
    let user = {
      Account: Account,
      Password: Password
    }
    this.service.checkAccount(user);
    this.service.checkLogin();
    
  }


  /* onLogin(Account : string, Password : string)
  {
    let user = {
      Account : Account,
      Password : Password
    }
    if (Account == this.service.formDataAdmin.Account && Password == this.service.formDataAdmin.Password)
    {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['product']);
    }
    else {
      this.error = - 1;
    }
  } */

}
