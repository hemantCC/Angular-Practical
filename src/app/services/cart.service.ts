import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { Product } from 'src/app/models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItem():Observable<CartItem[]>{
    //TODO: Mapping the obtained result to cartItem model properties ( pipe() and Map())
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result:any[])=>{
        let cartItems :CartItem[] = [];
        for(let item of result )
        {
          let productExists = false;

          for (let i in cartItems) {
            if (item.product.id == cartItems[i].productId) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }
      
          if (!productExists) {
            cartItems.push(new CartItem(item.id , item.product ))
          }
        }
        return cartItems;
      })
    );
  }

  addProductToCart(product:Product):Observable<any>{
    return this.http.post(cartUrl , { product });
  }
}
