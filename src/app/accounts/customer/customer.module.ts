import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { OverviewComponent } from './overview/overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyBasketComponent } from './my-basket/my-basket.component';


const routers:Routes =[
{path:"" , component:CustomerComponent,children:[
{path:"orders" , component:OrdersComponent},
{path:"wish-list" , component:WishListComponent},
{path:"my-details", component:MyDetailsComponent},
{path:"overview",component:OverviewComponent},
{path:"my-basket",component:MyBasketComponent},
]}

];
@NgModule({
  declarations: [
    CustomerComponent,
    OrdersComponent,
    WishListComponent,
    MyDetailsComponent,
    OverviewComponent,
    MyBasketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routers),
    SharedModule
  ]
})
export class CustomerModule { }
