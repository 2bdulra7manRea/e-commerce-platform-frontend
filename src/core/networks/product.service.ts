import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable()
export class ProductService extends BaseService {


constructor(protected http:HttpClient){
    super(http)
    this.url='products'
}


add(product){
if(!!product._id){
return this.update(product)
}else{
return this.create(product)
}

}


findById(id){
    return this.http.get(this.baseUrl+'/'+this.url+"/"+id)
}


sort(filter,skip,limit,sort,order){
    return this.http.get(this.baseUrl+'/'+this.url+"/category",{headers:{...filter},params:{skip,limit,sort,order}})
}


}