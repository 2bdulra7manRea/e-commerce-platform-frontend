import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/core/networks/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
productList;
title:string;
pageSize:number=10
pageIndex=0;
lengthPage:number=200;
sortType="";
id;
  constructor(private activatedRouter:ActivatedRoute,private location : Location, private productService:ProductService) { }
  ngOnInit(): void {
    this.activatedRouter.params.subscribe({
      next:(params)=>{
        if(!!params && !!params['id']){
          this.id=params['id']
          this.getCategoryProducts(this.id)
        }
      }
    })
  }

  onChangePaginator(ev:PageEvent){
    this.pageSize=ev.pageSize;
    this.pageIndex=ev.pageIndex;
    this.loadProducts(ev.pageIndex * ev.pageSize,ev.pageSize)
  }

  sortRun(){
    this.loadProducts(this.pageIndex*this.pageSize,this.pageSize)
  }


  loadProducts(skip,limit){
    if(!this.sortType['sort'] || !this.sortType['order']){
      this.getCategoryProducts(this.id,skip,limit,null,null)
      return;
    }
    this.getCategoryProducts(this.id,skip,limit,this.sortType['sort'],this.sortType['order'])
  }


  getCategoryProducts(id,skip=0,limit=20,sort=null,order=null){
    this.productService.sort({category:id},skip,limit,sort,order).subscribe({
      next:(p)=>{
        if(!!p && p['length']!==0){
          this.productList=p['items']
          this.lengthPage=p['length'];
        }
      }
    })
  }



}
