import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/core/networks/product.service';

@Component({
  selector: 'kp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
productsList;
currentFilter:string='all'
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getHomeProducts();
  }
  filterList(type:string){
    this.currentFilter=type
  }

  
  getHomeProducts(){
    this.productService.findAll().subscribe({
      next:(v)=>{
        if(!!v && v['length']!==0){
          this.productsList=v;
        }
        console.log(v);
      }
    })
  }

}
