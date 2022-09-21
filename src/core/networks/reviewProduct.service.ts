import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";


@Injectable()
export class ReviewProductService extends BaseService {


constructor(protected http:HttpClient){
    super(http);
    this.url = 'reviews'
}


getReviewsProduct(productId){

        return this.http.get(this.baseUrl+'/'+this.url+"/product/"+productId)    
}

getReviewsCustomer(customerId){

    return this.http.get(this.baseUrl+'/'+this.url+"/customer/"+customerId)    
}




}