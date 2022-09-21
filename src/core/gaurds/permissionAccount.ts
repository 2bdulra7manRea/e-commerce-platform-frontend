import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthUserService } from "../helpers/auth.service";



@Injectable()
export class CanActivateAccount implements CanActivate {

    constructor(private authService:AuthUserService,
        private location:Location
        ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        const profile =this.authService.userProfile()
        if(!!profile.access_token && !!profile.userType && !!profile.username){
            let userType = route.url[0].path
            // should send to backend to make sure the usertype in token
            if(userType===profile.userType){
                return true;
            }
            return false
        }
        return false;
    }











}