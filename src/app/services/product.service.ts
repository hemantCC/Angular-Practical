import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // //Populate products
  // products:Product[] =[
  //   new Product(1,'i Phone 11','6.1-inch Liquid Retina HD LCD display. Water and dust resistant (2 meters for up to 30 minutes, IP68).',70000,'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704'),
  //   new Product(2,'JBL Flip 5','JBL Flip 5 20 W IPX7 Waterproof Bluetooth Speaker with PartyBoost (Without Mic, Blue).',80000,'https://images-na.ssl-images-amazon.com/images/I/81cV0p6-2sL._SL1500_.jpg'),
  //   new Product(3,'Levi\'s Jeans','The 512™ Slim Taper Fit Jean has a slimmer leg than the Levi\'s® 511™ and has a tailor-inspired cut. ',3000,'https://images-na.ssl-images-amazon.com/images/I/91rjjiPWzJL._UL1500_.jpg'),
  //   new Product(4,'New Apple MacBook Pro','(16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Space Grey.Ninth-generation 8-core Intel Core i9 processor Stunning 16-inch Retina display with True Tone technology Touch Bar and Touch ID',140000,'https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg'),
  //   new Product(5,'Casio G-Shock','This is Casio G-Shock Analog-Digital Black Dial Men\'s Watch - GA-110-1BDR (G317)4',9000,'https://images-na.ssl-images-amazon.com/images/I/61z%2BfTq6lGL._UL1100_.jpg'),]

  
  constructor(private http : HttpClient ) { }

  //populate products and return observable
  getProducts() : Observable<Product[]>{

    return this.http.get<Product[]>(baseUrl);
  }
}
