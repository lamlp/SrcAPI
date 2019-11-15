import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {

  public items: Item[] = [];
  public total: number = 0;
  product: Product[];
  pd : Product;


  constructor(private activatedRoute: ActivatedRoute, private service: ProductService) { }

  ngOnInit() 
  {
    let id = (+this.activatedRoute.snapshot.params['id']);
    this.service.getProductById(id);
  
    
    
    //product = JSON.parse(this.service.products[0]);
       if (id) {
        var item: Item = {
          product: this.pd,
          quantity: 1
        };
        console.log(localStorage.getItem('cart'));
        
      if (localStorage.getItem('cart') == null) {
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify('cart'));
          console.log(localStorage);
        }
      else {
          let cart: any = JSON.parse(localStorage.getItem('cart'));
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
            if (item.product.ProductId == id) {
              index = i;
              break;
            }
          }
          if (index = -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          }
          else {
            let item: Item = JSON.parse(cart[index]);
            item.quantity += 1;
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.loadCart();
      } else this.loadCart();
  }

  loadCart() {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push(
        {
          product: item.product,
          quantity: item.quantity
        }
      );
      this.total += item.product.Price * item.quantity;
    }
  }

  remove(id: number) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      if (item.product.ProductId == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

}
