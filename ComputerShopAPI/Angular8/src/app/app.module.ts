import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ComputerShopApiService } from './shared/computershopapi.service';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component'

/*const appRoutes : Routes = [
  {
    path : '',
    component : AppComponent
  },
  {
    path : 'product',
    component : ProductsComponent
  },
  {
    path : 'customer',
    component : CustomerComponent
  }
]*/

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    /*RouterModule.forRoot(appRoutes)*/
  ],
  providers: [ComputerShopApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
