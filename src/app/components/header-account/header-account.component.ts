import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-account',
  templateUrl: './header-account.component.html',
  styleUrls: ['./header-account.component.scss']
})
export class HeaderAccountComponent implements OnInit {

  constructor(protected router:Router) { }

  ngOnInit(): void {
  }
  
  goHome(){
    this.router.navigate(['/home'])
  }
}
