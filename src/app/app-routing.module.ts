import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateAccount } from 'src/core/gaurds/permissionAccount';

const routes: Routes = [
{path:"",loadChildren:()=>import("./pages/pages.module").then((M)=>M.PagesModule)},
{path:"auth" , canActivate:[],  loadChildren:()=>import('./auth/auth.module').then((M)=>M.AuthModule)},
{path:"customer", canActivate:[CanActivateAccount] ,loadChildren:()=>import('./accounts/customer/customer.module').then((M)=>M.CustomerModule)},
{path:"seller" ,canActivate:[CanActivateAccount], loadChildren:()=>import('./accounts/seller/seller.module').then((M)=>M.SellerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
