import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/core/networks/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private CategoriesService:CategoriesService) { }
categoriesList=[];
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.CategoriesService.findAll().subscribe({
      next:(c)=>{
        if(!!c && c['length']!==0){
          this.extractCategories(c);
        }
        console.log(c);
      }

    })
  }


  extractCategories(list){
    list.forEach(element => {
        this.categoriesList.push({path:`/category/${element._id}` , content:element.title})
    });

  }

}
