import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MarketplaceItemType } from '../types/marketplace.type';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy{
  @Input() title:string|undefined
  cartItems:{item:MarketplaceItemType, quantity:number}[]=[];
  cartItemSub!:Subscription;
  showCart:boolean=false;

  constructor(
    public cartService:CartService,private productService:ProductService
  ){}

  ngOnInit(): void {
    this.cartItemSub = this.cartService.getCartItems().subscribe(cartItems=>{
      this.cartItems=cartItems;
      if(cartItems.length>0){
      console.log(cartItems[0].item)}
    })
  }
  toggleSideBar(){
    this.showCart=!this.showCart
  }
  incrementQt=(item:MarketplaceItemType)=>{
    this.cartService.addItem(item);
  }
  decrementQt=(item:MarketplaceItemType)=>{
    this.cartService.decrementItemCart(item);
  }

  removeItemFromCart(item:MarketplaceItemType){
    this.cartService.removeItem(item);
    //unselect item
    this.productService.markProductAsUnselected(item);
    if(this.cartItems.length===0){
      this.showCart=false;
    }
    
  }

  ngOnDestroy(): void {
    this.cartItemSub.unsubscribe()    
  }
}
