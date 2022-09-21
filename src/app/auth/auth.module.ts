import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AccountService } from 'src/core/networks/account.service';

const route:Routes=[
  {path:"" , component:AuthComponent,children:[
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent}
  ]}
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(route)
  ],
  providers:[AccountService]
})
export class AuthModule { }
