import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";


export class BaseService{

protected baseUrl:string=environment.baseUrl;
url:string='';

constructor(protected http:HttpClient){}

create(body,route:string=""){
return this.http.post(this.baseUrl+'/'+this.url+'/'+route,body)
};

update(body){
    return this.http.patch(this.baseUrl+"/"+this.url+"/"+body._id,body)
}

delete(id){
    return this.http.delete(this.baseUrl+'/'+this.url+'/'+id)
}

find(filter,route=""){
   return this.http.get(this.baseUrl+'/'+this.url+'/'+route,{headers:{...filter}})
};

findAll(){
    return this.http.get(this.baseUrl+'/'+this.url)
}

findById(id){
    return this.http.get(this.baseUrl+'/'+this.url+"/"+id)
}


}