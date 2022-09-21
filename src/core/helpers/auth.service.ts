import { Injectable } from "@angular/core";



@Injectable()
export class AuthUserService{

constructor(){}

getUserIdentity(){
// return userId , userType
}    

authenticate(payload){
console.log(payload);
localStorage.setItem('access_token',payload.access_token);
localStorage.setItem('userType',payload.userType);
localStorage.setItem('username',payload.username);
return {success:true}
}


getToken(){
    return localStorage.getItem('access_token')
}

unAuthticate(){
    localStorage.clear()
}

userProfile(){
// ! should get that from backend
return {
    access_token:localStorage.getItem('access_token'),
    userType:localStorage.getItem('userType'),
    username:localStorage.getItem('username')
}
}

} 