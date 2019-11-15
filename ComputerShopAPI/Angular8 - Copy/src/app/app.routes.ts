import { Routes } from '@angular/router'

import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductclientsComponent } from './productclients/productclients.component';

export const appRoutes : Routes = [
    {
      path : '',
      redirectTo : 'productclients',
      pathMatch : 'full'
    },
    {
      path : 'home',
      component : HomeComponent
    },
    {
      path : 'product',
      component : ProductsComponent,
      canActivate : [AuthGuard]
    },
    {
      path : 'customer',
      component : CustomersComponent,
      canActivate : [AuthGuard]
    },
    {
      path : 'login',
      component : LoginComponent
    },
    {
      path : 'subcategories/:id',
      component : SubcategoriesComponent,
      canActivate : [AuthGuard]
    },
    {
      path : 'cart',
      component : CartComponent
    },
    {
      path : 'cart/:id',
      component : CartComponent
    },
    {
      path : 'categories',
      component : CategoriesComponent,
      canActivate : [AuthGuard]
    },
    {
      path : 'productdetail/:id',
      component : ProductDetailComponent
    },
    {
      path : 'productclients',
      component : ProductclientsComponent
    },
    {
      path :'**',
      component : NotFoundComponent
    }
  ];