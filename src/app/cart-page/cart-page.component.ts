import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/Cartitem';

import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  
  constructor(private cartServices:CartService,private foodService:FoodService){
    let foods=foodService.getAll();

    this.setCart();

  }
  ngOnInit(): void {
    this.setCart()
    
  }
  setCart(){
    this.cart=this.cartServices.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartServices.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    console.warn(quantityInString);
    const quantity=parseInt(quantityInString);
    console.warn(quantity);
    this.cartServices.changeQuantity(quantity,cartItem.food.id);
    console.warn(quantity);
    // this.setCart();
  }

}
