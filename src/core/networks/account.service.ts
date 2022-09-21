import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable()
export class AccountService extends BaseService {
constructor(protected http:HttpClient){
    super(http)
    this.url='account'
};


register(data){
return this.create(data,'register')
};


login(data){
    return this.create(data,'login')
}


getUserIdentity(){
return this.http.get(this.baseUrl+"/"+this.url+"/me",{headers:{Authorization:localStorage.getItem("access_token")}})
}


}





