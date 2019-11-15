import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { appRoutes } from './app.routes';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { LoginComponent } from './login/login.component'
import { ProductService } from "./services/product.service";
import { CustomerService } from './services/customer.service';
import { AdminService } from './services/admin.service';
import { MenuComponent } from './menu/menu.component';
import { CategoryService } from './services/category.service';
import { SubCategoryService } from './services/subcategory.service';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryComponent } from './categories/category/category.component';
import { SubCategoryComponent } from './categories/subcategory/subcategory.component';
import { SubCategoryListComponent } from './categories/subcategory-list/subcategory-list.component';
import { ProductclientsComponent } from './productclients/productclients.component';
import { ProductclientListComponent } from './productclients/productclient-list/productclient-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerListComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ProductDetailComponent,
    LoginComponent,
    MenuComponent,
    SubcategoriesComponent,
    CartComponent,
    CategoriesComponent,
    CategoryListComponent,
    CategoryComponent,
    SubCategoryComponent,
    SubCategoryListComponent,
    ProductclientsComponent,
    ProductclientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    CustomerService,
    AdminService,
    CategoryService,
    SubCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
