import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from 'src/core/networks/account.service';
import { SellerService } from 'src/core/networks/seller.service';

@Component({
  selector: 'app-settings-seller',
  templateUrl: './settings-seller.component.html',
  styleUrls: ['./settings-seller.component.scss']
})
export class SettingsSellerComponent implements OnInit {
sellerForm:FormGroup
  constructor(private sellerService:SellerService ,
     private accountService:AccountService,
     private sellerFormBuilder:FormBuilder
     ) { }
seller:any;
  ngOnInit(): void {
    this.initForm();
    this.getSeller();
  }

  initForm(){
    this.sellerForm= this.sellerFormBuilder.group({
      email:[""],
      brandName:[""],
      brandCountry:[""],
      username:[""]
    })
  }

fetchData(){
  this.sellerForm.patchValue({
    email:this.seller?.userId.email,
    username:this.seller?.userId.username,
    brandName:this.seller.brandName,
    brandCountry:this.seller?.brandCountry    
  })
}

  getSeller(){
    this.accountService.getUserIdentity().subscribe({
      next:(obj)=>{
        if(!!obj && obj['userType']==='seller'){
          console.log(obj['securityUserId'])
          this.sellerService.findById(obj['securityUserId']).subscribe({
            next:(e)=>{
              console.log(e);
              if(!!e && e['_id']){
                this.seller=e;
                this.fetchData()
              }
            }
          })
        }
      }
    })
  }

  
  prepareData(){
    let b :any = {};
    const controls = this.sellerForm.controls;
    b.username= controls['username'].value;
    b.email=controls['email'].value;
    b.brandName=controls['brandName'].value;
    b.brandCountry=controls['brandCountry'].value
    if(!!this.seller._id){
      b._id =this.seller._id;
    }
    return b;
  }


  submit(){
const formdata= this.prepareData()
this.sellerService.update(formdata).subscribe({
  next:(e)=>{
    console.log(e);
  }
})

  }

}
