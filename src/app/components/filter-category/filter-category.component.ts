import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.scss']
})
export class FilterCategoryComponent implements OnInit {
color:string ="rgb(10, 10, 10)"
  constructor() { }

  ngOnInit(): void {
  }

}
