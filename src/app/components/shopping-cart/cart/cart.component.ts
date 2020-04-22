import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0
  constructor(private msg: MessangerService) { }

  ngOnInit() {

    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }
  addProductToCart(product: Product) 
  {
    let productExists = false;

    for (let i in this.cartItems) 
    {
      if (product.id == this.cartItems[i].productId)
      {
        this.cartItems[i].quantity++
        productExists = true
        break;
      }
    }

    if(!productExists)
    {
      this.cartItems.push({
            productId: product.id,
            productName: product.name,
            quantity: 1,
            price: product.price
          })
    }

    this.cartTotal = 0

    this.cartItems.forEach(item => 
      {
        this.cartTotal += (item.price * item.quantity)
      })
      
  }
  // EmptyCart(){}
}
