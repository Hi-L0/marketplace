import { Injectable } from '@angular/core';
import { MarketplaceItemType } from '../types/marketplace.type';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products:MarketplaceItemType[] = [{
    id:1,
    title:"ADIDAR MAX",
    category:"ADULT",
    image:"https://via.placeholder.com/500",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi earum vitae, eos magnam odit impedit distinctio quisquam quia facilis esse alias, aliquam porro enim, quas dicta nisi eum quis consequatur.",
    price:13.99,
    isSelected:false,
  },{
    id:3,
    title:"JAKEL MAX",
    category:"KIDS",
    image:"https://via.placeholder.com/500",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi earum vitae, eos magnam odit impedit distinctio quisquam quia facilis esse alias, aliquam porro enim, quas dicta nisi eum quis consequatur.",
    price:13.99,
    isSelected:false,
  },{
    id:2,
    title:"ADIDAR MAX",
    category:"ADULT",
    image:"https://via.placeholder.com/500",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi earum vitae, eos magnam odit impedit distinctio quisquam quia facilis esse alias, aliquam porro enim, quas dicta nisi eum quis consequatur.",
    price:13.99,
    isSelected:false,
  },];
  constructor() { }

  getProducts=():Observable<Array<MarketplaceItemType>>=>{
    return of(this._products);
  }

  markProductAsSelected=(item:MarketplaceItemType)=>{
    item.isSelected= true;
  }

  markProductAsUnselected=(item:MarketplaceItemType)=>{
    item.isSelected=false;
  }

}
