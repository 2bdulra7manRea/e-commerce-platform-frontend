import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { AccountService } from 'src/core/networks/account.service';
import { OrdersBasketService } from 'src/core/networks/ordersBasket.service';

@Component({
  selector: 'app-card-k-pro',
  templateUrl: './card-k-pro.component.html',
  styleUrls: ['./card-k-pro.component.scss']
})
export class CardKProComponent implements OnInit {
@Input() item = {name:"" , price:0, _id:""}
@Input() control:boolean = false
image="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";
  constructor(private router :Router , private orderBasket:OrdersBasketService , private accountService:AccountService) { }

  ngOnInit(): void {
  }


  openDetailsPage(){
    if(this.control){
    this.router.navigate(["/seller/my-product/details/",this.item._id])
    }else{
      this.router.navigate(["/products/product-details/",this.item._id])
    }
  }

  openPage(){
    if(this.control){
      this.router.navigate([`/seller/my-products/edit/${this.item._id}`])
    }
  }

  async addToMyBasket(){
  const $sourse= this.accountService.getUserIdentity()
  const result = await firstValueFrom($sourse)
  if(!result || !result['securityUserId']){
    return;
  }
  const body ={
    customerId:result['securityUserId'],
    productId:this.item._id
  }
  this.orderBasket.create(body).subscribe({
    next:(r)=>{
      console.log(r)
    }
  })
  }

  async removeFromBasket(){
    const $sourse= this.accountService.getUserIdentity()
    const result = await firstValueFrom($sourse)
    if(!result || !result['securityUserId']){
      return;
    }
    const body ={
      customerId:result['securityUserId'],
      productId:this.item._id
    }


    this.orderBasket.removeFromMyBasket(body).subscribe({
      next:(d)=>{
        console.log(d);
      }
    })
  }


}
