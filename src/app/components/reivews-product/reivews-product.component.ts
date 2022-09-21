import { Component, Input, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AccountService } from 'src/core/networks/account.service';
import { ReviewProductService } from 'src/core/networks/reviewProduct.service';

@Component({
  selector: 'reivews-product',
  templateUrl: './reivews-product.component.html',
  styleUrls: ['./reivews-product.component.scss']
})
export class ReivewsProductComponent implements OnInit {
@Input() productId:string="";
reviews;
customerId;
reviewContent:string=""
  constructor(private reviewService:ReviewProductService , private accountService:AccountService) { }

  ngOnInit(): void {
    this.getReviews()
    this.getCustomerId()
  }

  async getCustomerId(){
    const $source = this.accountService.getUserIdentity();
    const result = await firstValueFrom($source)
    if(!result && !result["securityUserId"]){
      return;
    }
    this.customerId=result["securityUserId"]
    }

 async submitReview(){
    const body = {
      customerId:this.customerId,
      productId:this.productId,
      reviewContent:this.reviewContent
    }

    if(!this.customerId){
      console.log('no customerId found')
      return;
    }

    this.reviewService.create(body).subscribe({
      next:(e)=>{
        this.reviewContent="";
        console.log(e)
        this.getReviews();
      }
    })

  }

  getReviews(){
    this.reviewService.getReviewsProduct(this.productId).subscribe({
      next:(e)=>{
        if(!!e && e['length']!==0){
          console.log(e);
          this.reviews=e;
        }
      }
    })
  }
}
