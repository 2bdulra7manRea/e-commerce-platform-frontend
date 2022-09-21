import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/core/helpers/auth.service';

@Component({
  selector: 'categories-bar',
  templateUrl: './categories-k.component.html',
  styleUrls: ['./categories-k.component.scss']
})
export class CategoriesKComponent implements OnInit {
@Input() lists=[
{path:"/auth/login" , content:"Man"},
{path:"/auth/register" , content:"Man"},
];
@Input() logOut:boolean=false

@Input() title:string="Category"

  constructor(private router:Router , private authService:AuthUserService) { }

  ngOnInit(): void {
  }


  logOutUser(){
    this.authService.unAuthticate();
    this.router.navigate(['/auth/login']).then()
  }


}
