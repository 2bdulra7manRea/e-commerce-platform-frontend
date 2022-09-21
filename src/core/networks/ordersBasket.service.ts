import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";


@Injectable()
export class OrdersBasketService extends BaseService {


constructor(protected http:HttpClient){
    super(http);
    this.url = 'orders-basket'
}




removeFromMyBasket(body){
return this.http.patch(this.baseUrl+"/"+this.url,body)
}


decreaseProductsInMyBasket(body){
    return this.http.patch(this.baseUrl+"/"+this.url+'/quantity',body)
    }
    

}