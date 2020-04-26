import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

    
  @Input() cartItem : any 
  constructor( private cartServices: CartService) { }

  ngOnInit(): void {
  }


  deleteCartItem(id:number){
    this.cartServices.deleteCartItem(id).subscribe(()=>{
      console.log('id');
      console.log(id);
      //refresh code
      location.reload();
    })
}


}
