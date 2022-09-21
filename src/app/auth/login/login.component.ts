import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/core/helpers/auth.service';
import { AccountService } from 'src/core/networks/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm:FormGroup;
errorIsFound:boolean=false;
isSubmited:boolean=false;
  constructor(
  private loginFb:FormBuilder,
  private location:Location,
  private router:Router,
  private authService:AuthUserService,
  private accountService:AccountService,
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

initForm(){
  this.loginForm=this.loginFb.group({
    email:[null , Validators.required],
    password:[null , Validators.required],
  })
}


prepareFormData(){
const fd={email:"" , password:""};
fd.email=this.loginForm.controls['email'].value
fd.password=this.loginForm.controls['password'].value
return fd
}

submitForm(){

if(this.loginForm.invalid){
  return;
}

const formData = this.prepareFormData();
this.isSubmited=true;
this.accountService.login(formData).subscribe({
next:(d)=>{
  if(!!d && d['success']){
    if(this.authService.authenticate(d).success){
      this.navigateTOMyAccount(d['userType'])
    }
  }else{
    this.errorIsFound=true;
  }
},
error:(e)=>{
this.errorIsFound=true;
this.isSubmited=false;
},
complete:()=>{
  this.isSubmited=false
}
})
return;
}


navigateTOMyAccount(userType){
  this.router.navigate([`/${userType}/`])
}


goToRegister(){

this.router.navigate(["/auth/register"]).then();

}



}
