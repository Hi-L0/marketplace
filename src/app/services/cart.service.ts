import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MarketplaceItemType } from '../types/marketplace.type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItems = new BehaviorSubject<
    Array<{ item: MarketplaceItemType; quantity: number }>
  >([]);
  constructor() {}

  getCartItems = () => this._cartItems;

  addItem = (item: MarketplaceItemType, quantity=1) => {
    const currentCartItems = this._cartItems.getValue();
    const searchItem = currentCartItems.find((it) => it.item.id === item.id);
    if(searchItem){
      searchItem.quantity += quantity;
    }else{
      currentCartItems.push({item,quantity});
    }
    this._cartItems.next(currentCartItems);
  };

  addCustomQuantity=(item:MarketplaceItemType,quantity:number)=>{
    const currentCartitems=this._cartItems.getValue();
    const thisItem=currentCartitems.find((it)=>it.item.id===item.id);
    if(thisItem){
      if(quantity>0){
        thisItem.quantity += quantity;
      }else{
          console.log('wrong value for quentity')
      }
    }
  }

  decrementItemCart=(item:MarketplaceItemType,quantity=1)=>{
    const currentCartItems = this._cartItems.getValue();
    const searchItem = currentCartItems.find((it)=>it.item.id===item.id);
    if(searchItem){
      searchItem.quantity -= quantity;
    }else{
      console.log("this item doesn't exist in cart");
    }
  }
  removeItem=(item:MarketplaceItemType)=>{
    let currentCartItems = this._cartItems.getValue();
    currentCartItems=currentCartItems.filter(it=>it.item.id !== item.id );
    this._cartItems.next(currentCartItems);//to keep an eye on currentcartitem in case of a change
  }
}
