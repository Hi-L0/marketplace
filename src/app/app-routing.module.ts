import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ObservableComponent } from './observable/observable.component';


const routes:Routes=[
  {
    path:'', component:MarketplaceComponent,
  },
  {
    path:'timer',component:ObservableComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
  ]

})
export class AppRoutingModule { }
