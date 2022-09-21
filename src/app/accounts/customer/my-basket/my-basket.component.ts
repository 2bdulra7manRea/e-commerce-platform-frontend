import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AccountService } from 'src/core/networks/account.service';
import { OrdersBasketService } from 'src/core/networks/ordersBasket.service';

@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.scss']
})
export class MyBasketComponent implements OnInit {
ordersBaskets;
totalPrice:number=0
  constructor(private orderBasketService:OrdersBasketService , private accountService:AccountService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

 async getCustomerId(){
const $source = this.accountService.getUserIdentity();
const result = await firstValueFrom($source)
if(!result && !result["securityUserId"]){
  return;
}
return result["securityUserId"]
  }


async loadProducts(){
  const customerId=await this.getCustomerId()
  if(!customerId){
    return;
  }

  this.getBasketProducts(customerId)
}

async getBasketProducts(customerId){

    this.orderBasketService.findById(customerId).subscribe({
      next:(d)=>{
        this.ordersBaskets=d;
        this.calculateTotalPrice()
      }
    })
  }


  calculateTotalPrice(){
    this.totalPrice=0;
    this.ordersBaskets['productIds'].forEach(element => {
      this.totalPrice += element.quantity * element.productId.price;
    });
  }



increaseQuantity(customerId,productId){
  const body = {
    customerId:customerId,
    productId:productId
  }
  this.orderBasketService.create(body).subscribe({
    next:()=>{
      this.getBasketProducts(customerId)
    }
  })
}

decreaseQuantity(customerId,productId){
  const body ={
    customerId:customerId,
    productId:productId,
  }
  this.orderBasketService.decreaseProductsInMyBasket(body).subscribe({
    next:()=>{
      this.getBasketProducts(customerId)
    }
  })
}





}
