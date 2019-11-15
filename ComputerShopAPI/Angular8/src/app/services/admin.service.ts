import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AdminService {
    formDataAdmin : Admin;

    listAdmin : Admin[];

    private API : string = 'http://localhost:60797/api/';

    constructor(public router: Router, private http: HttpClient) { }

    checkAccount(item)
    {  
        
        this.http.post(this.API + 'admins', item).subscribe(res =>{
            if (res){
                alert ('Success');
                localStorage.setItem('user', JSON.stringify(item));
                //this.router.navigate(['/']);
                window.location.reload();
            }
            else{
                alert('Fail');
            }
        });
    }

    checkLogin() : Boolean {
        if (localStorage.getItem('user')) {
          this.router.navigate(['']);
          return true;
        }
        else 
        {
            return false;
        }
      }


}