import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './seller.component';
import { RouterModule, Routes } from '@angular/router';
import { MyProductsComponent } from './my-products/my-products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SettingsSellerComponent } from './settings-seller/settings-seller.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatSelectModule} from "@angular/material/select"
import { ProductService } from 'src/core/networks/product.service';
import { TokenInterceptorService } from 'src/app/interceptors/token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductDetailsComponent } from 'src/app/pages/products/product-details/product-details.component';
import {MatExpansionModule} from '@angular/material/expansion'

const routes :Routes = [
{path:"" , pathMatch:"full" , redirectTo:"my-products"},  
{ path:"" , component:SellerComponent,children:[
{path:'my-products' , component:MyProductsComponent},
{path:"my-products/new" , component:ProductFormComponent},
{path:'my-products/edit/:id' , component:ProductFormComponent},
{path:"settings" , component:SettingsSellerComponent},
{path:"my-product/details/:id" , component:ProductDetailsComponent}
]
}
]

@NgModule({
  declarations: [
    SellerComponent,
    MyProductsComponent,
    ProductFormComponent,
    SettingsSellerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule
  ],
  providers:[ProductService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ]
})
export class SellerModule { }
