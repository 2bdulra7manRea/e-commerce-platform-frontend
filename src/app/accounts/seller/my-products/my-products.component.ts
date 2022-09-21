import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthUserService } from 'src/core/helpers/auth.service';
import { AccountService } from 'src/core/networks/account.service';
import { ProductService } from 'src/core/networks/product.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {
  list;
  sellerId:string;
  constructor(private productsService:ProductService , private accountService:AccountService) { }

 async ngOnInit(){
   await this.getSellerId()
   if(!!this.sellerId){
    this.getMyProducts(this.sellerId)
   }
  }

  async getSellerId(){
   const $source = this.accountService.getUserIdentity()
    const result = await firstValueFrom($source);
    console.log(result);
    if(!!result){
        if(!!result && !!result['securityUserId'] && result['userType']==="seller"){
          this.sellerId=result['securityUserId']
        }
    }

    // this.accountService.getUserIdentity().subscribe({
    //   next:(v)=>{
    //     if(!!v && !!v['securityUserId'] && v['userType']==="seller"){
    //       this.sellerId=v['securityUserId']
    //     }
    //   },
    //   error:(e)=>{
    //     console.log(e);
    //   }
    // })
  }


  getMyProducts(sellerId){

    this.productsService.find({sellerId:sellerId},"me").subscribe({
      next:(e)=>{
        if(!!e && e['length']!==0){
          this.list=e;
        }
      }
    })
  }

}
