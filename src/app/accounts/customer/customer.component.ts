import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

customerList=[
  {path:"/customer/overview" , content:"Account Overview"},
  {path:"/customer/my-basket" , content:"My Basket"},
  {path:"/customer/orders" , content:"Orders Online"},
  {path:"/customer/my-details" , content:"My Details"},
  {path:"/customer/wish-list" , content:"Wishlist"},
];

  constructor() { }

  ngOnInit(): void {
  }

}
