import { Component, OnInit } from '@angular/core';
import { ComputerShopApiService } from 'src/app/shared/computershopapi.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styles: []
})
export class CustomerListComponent implements OnInit {

  constructor(private service:ComputerShopApiService) { }

  ngOnInit() {
    this.service.getCustomer();
  }

}
