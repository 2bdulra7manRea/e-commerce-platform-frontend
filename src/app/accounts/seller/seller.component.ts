import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/core/helpers/auth.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
lists =[
  {path:"my-products" , content:"My Products"},
  {path:"/seller/settings" , content:'Settings'},
]
  constructor(
    ) { }

  ngOnInit(): void {
  }

}
