import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

/*   _login: string = "disabled";
  _logout: string = "disabled"; */

  check : Boolean = true;
  ngOnInit() {
/*     this.disableButton(); */
  if (localStorage.getItem('user'))
  this.check = false;
  else this.check = true;
  }

  logout() {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
      alert('Logout successfully')
      this.router.navigate(['']);
      if (localStorage.getItem('user'))
  this.check = false;
  else this.check = true;
    }
/*     this.disableButton(); */
  }

/*   disableButton() {
    if (this.service.checkLogin() == true) {
      this.disableLogin();
    }
    else {
      this.disableLogout();
    }
  }

  disableLogin() {
    this._login = 'disabled';
    this._logout = '';
  }

  disableLogout() {
    this._login = '';
    this._logout = 'disabled';
  } */
}

