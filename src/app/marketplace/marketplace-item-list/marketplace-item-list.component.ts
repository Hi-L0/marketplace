import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { MarketplaceItemType } from 'src/app/types/marketplace.type';

@Component({
  selector: 'app-marketplace-item-list',
  templateUrl: './marketplace-item-list.component.html',
  styleUrls: ['./marketplace-item-list.component.scss'],
  // imports:[CommonModule]
})
export class MarketplaceItemListComponent implements OnInit, OnDestroy {
  // public marketplaceItems:MarketplaceItemType[]

  productsSub!: Subscription;
  marketplaceItems: MarketplaceItemType[] = [];
  quantity:number=1;
  constructor(
    public productsService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productsSub=this.productsService.getProducts().subscribe(products=>{
      this.marketplaceItems=products
    })
  }

  addToCart=(item:MarketplaceItemType)=>{ //this is where we need to change if we want to change quantities "i think"
    this.productsService.markProductAsSelected(item);
    this.cartService.addItem(item,this.quantity);
  }

  removeFromCart=(item:MarketplaceItemType)=>{
    this.productsService.markProductAsUnselected(item);
    this.cartService.removeItem(item);
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
  }
}
