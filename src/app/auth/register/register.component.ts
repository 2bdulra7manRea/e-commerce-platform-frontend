import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUserService } from 'src/core/helpers/auth.service';
import { AccountService } from 'src/core/networks/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userType: string = 'customer';
  registerForm: FormGroup;
  constructor(private authService:AuthUserService ,private accountService:AccountService,private registerFb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initform();
  }

  selectUser(type: string) {
    this.userType = type;
  }

  initform() {
    this.registerForm = this.registerFb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      username: [null, Validators.required],
      phoneNumber: [null],
      brandName: [null],
    });
  }

  showPassword() {}

  prepareForm() {
    let formData: any = {};
    const controls = this.registerForm.controls;
    formData.email = controls['email'].value;
    formData.username = controls['username'].value;
    formData.password = controls['password'].value;
    formData.phoneNumber = controls['phoneNumber'].value;
    if (this.userType === 'seller') {
      formData.brandName = controls['brandName'].value;
    }
    formData.userType = this.userType;

    return formData;
  }

  createAccount() {
    const dataForm = this.prepareForm();
    this.accountService.register(dataForm).subscribe({
      next:(value)=>{
        console.log(value)
        if(!!value['access_token']){
          this.authService.authenticate(value)
          this.naviageToAccount()
        }
      },
      error:(e)=>{
        console.log(e)
      },
      complete:()=>{}
    })
  }

  naviageToAccount(){
    this.router.navigate([`/${this.userType}/`])
  }

  goToSignIn() {
    this.router.navigate(['/auth/login']);
  }
}
