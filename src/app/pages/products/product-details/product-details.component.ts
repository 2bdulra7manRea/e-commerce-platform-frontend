import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AccountService } from 'src/core/networks/account.service';
import { OrdersBasketService } from 'src/core/networks/ordersBasket.service';
import { ProductService } from 'src/core/networks/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product;
count:number=0
  constructor(private activatRouter:ActivatedRoute ,
      private accountService:AccountService,
      private ordersBaskets:OrdersBasketService,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.activatRouter.params.subscribe({
      next:(params)=>{
        console.log(params)
        if(!!params && !!params['id']){
          this.getProduct(params['id'])
        }
      }
    })
  }


  getProduct(id){
    this.productService.findById(id).subscribe({
      next:(item)=>{
        if(!!item  && !!item['_id'] ){
          this.product=item
          console.log(this.product)
        }
      }
    })
  }


  async getCustomerId(){
    const $source = this.accountService.getUserIdentity();
    const result = await firstValueFrom($source)
    if(!result && !result["securityUserId"]){
      return;
    }
    return result["securityUserId"]
      }
    

 async addToBasket(){
    const customerId = await this.getCustomerId()
    if(!customerId){
      return;
    }
    const body = {
      customerId:customerId,
      productId:this.product._id
    }
    this.ordersBaskets.create(body).subscribe({
      next:(s)=>{
        // snakbar
      }
    })
  }

increase(){
  this.count++;
}
decrease(){
  this.count--;
}


}
