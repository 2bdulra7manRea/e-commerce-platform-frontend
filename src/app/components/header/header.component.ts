import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/core/helpers/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , AfterViewInit {
@ViewChild("lop") headerCircle !:ElementRef;
isAuthenticated:boolean=false
  constructor(private authService:AuthUserService,
    private router:Router
    ) { }

  ngOnInit(): void {
    if(!!this.authService.userProfile().access_token){
      this.isAuthenticated=true;
    }
  }

  goToMyAccount(){
    this.router.navigate([`/${this.authService.userProfile().userType}/`])
  }

ngAfterViewInit(): void {
}


  // handleMouse(ev:MouseEvent){


  //   this.moveCircle(ev.clientX, ev.clientY)
  // }

  // moveCircle(x,y){
  //   this.headerCircle.nativeElement.style.left=`${x}px`
  //   // this.headerCircle.nativeElement.style.top=`${y}px`
  // }

}
