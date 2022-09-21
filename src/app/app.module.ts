import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { AuthUserService } from 'src/core/helpers/auth.service';
import { CanActivateAccount } from 'src/core/gaurds/permissionAccount';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { AccountService } from 'src/core/networks/account.service';
import { SellerService } from 'src/core/networks/seller.service';
import { ProductService } from 'src/core/networks/product.service';
import { CategoriesService } from 'src/core/networks/categories.service';
import { OrdersBasketService } from 'src/core/networks/ordersBasket.service';
import { ReviewProductService } from 'src/core/networks/reviewProduct.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [AuthUserService,
    CanActivateAccount,
    AccountService,
    SellerService,
    ProductService,
    CategoriesService,
    OrdersBasketService,
    ReviewProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
