import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthUserService } from 'src/core/helpers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService:AuthUserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepter :::::::::::')

const {method} = req; 
console.log('req method is ' , method)
    if(method  === "POST" || method  ===  "PATCH" || method  ===  "DELETE"){
      const {access_token} = this.authService.userProfile()
      if(!!access_token){
        const request = req.clone({setHeaders:{Authorization:access_token}})
        return next.handle(request).pipe(
          catchError((err:any)=>{
            console.log(err)
            if(err.status===401){
              this.authService.unAuthticate()
            }
            return throwError(()=>new Error('connot send request'))
          })
        )

      }else {
        return throwError(()=>new Error('there is no token !')) 
      }
    }else {
      return next.handle(req)
    }

  }
}
