import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AccountService } from 'src/core/networks/account.service';
import { CategoriesService } from 'src/core/networks/categories.service';
import { ProductService } from 'src/core/networks/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
productForm:FormGroup;
prodect;
productId:string="";
errorIsFound:boolean=false;
isSubmitted:boolean=false;
sellerId:string;
categoriesList;
  constructor(
    private productFormBuilder:FormBuilder,
    private router:Router,
    private location:Location,
    private productService:ProductService,
    private accountService:AccountService,
    private activteRouter:ActivatedRoute,
    private categoriesService:CategoriesService
  ) { }

  ngOnInit(): void {
    this.initForm()
    this.getCategories();
    this.getSellerId()
    this.activteRouter.params.subscribe({
      next:(params)=>{
        if(!!params && params["id"]){
          this.getProduct(params['id'])
        }
        // this.prodect()
      }
    })

  }


  getCategories(){
    this.categoriesService.findAll().subscribe({
      next:(c)=>{
        if(!!c && c['length']!==0){
          this.categoriesList=c;
        }
      }
    })
  }


  getProduct(id){
    this.productService.findById(id).subscribe({
      next:(item)=>{
        if(!!item && !!item["_id"]){
          this.prodect=item
          this.fetchData()
        }
      },
      error:(e)=>{
        console.log(e);
      }
    })
  }

  initForm(){
    this.productForm= this.productFormBuilder.group({
      name:[null,Validators.required],
      price:[0],
      quantity:[0],
      discount:[0],
      content:[""],
      information:[""],
      countryOfOrigin:[""],
      category:[""],
      code:[""]
    })
  }






  fetchData(){
    this.productForm.patchValue({
      name:this.prodect.name,
      price:this.prodect.price,
      quantity:this.prodect.quantity,
      discount:this.prodect.discount || 0,
      content:this.prodect.description?.content,
      code:this.prodect.description?.code,
      information:this.prodect.information,
      countryOfOrigin:this.prodect.specification?.countryOfOrigin,
      category:this.prodect.category   
    })
  }


  async getSellerId(){
    const $source= this.accountService.getUserIdentity()
    const  userIdentity = await firstValueFrom($source)
    if(!!userIdentity && userIdentity['userType']==='seller'){
      this.sellerId = userIdentity['securityUserId'];
    }
    return userIdentity;
  }

  prepareFormDate(){
    const formdata : any ={}
    const controls = this.productForm.controls;
    formdata.sellerId = this.sellerId
    formdata.name= controls['name'].value
    formdata.price=Number(controls['price'].value)
    formdata.quantity=Number(controls['quantity'].value)
    formdata.discount=Number(controls['discount'].value)
    formdata.description ={
      content:controls['content'].value,
      code:controls['code'].value
    }
    formdata.information= controls['information'].value
    formdata.specification={
      countryOfOrigin:controls['countryOfOrigin'].value
    }
    formdata.category= controls['category'].value
    if(!!this.prodect){
      formdata._id = this.prodect._id
    }
    return formdata
  }



  submit(){
    if(this.productForm.invalid){
      this.errorIsFound=true;
      return;
    }
    if(!this.sellerId){
      this.errorIsFound=true;
      return;
    }
    const formdata = this.prepareFormDate();
    this.productService.add(formdata).subscribe({
      next:(v)=>{
        console.log(v);
        this.routerToMyProduct()
      },
      error:(e)=>{
        console.log(e);
        this.errorIsFound=true;
      },
    })
  }


    routerToMyProduct(){
      // this.router.navigate(["/seller/my-products"]).then()
    }


    goBack(){
      this.location.back()
    }

  
}
