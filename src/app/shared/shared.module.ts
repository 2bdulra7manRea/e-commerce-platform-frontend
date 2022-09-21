import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardKProComponent } from '../components/card-k-pro/card-k-pro.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CategoriesKComponent } from '../components/categories-k/categories-k.component';
import { SearchKComponent } from '../components/search-k/search-k.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { FilterCategoryComponent } from '../components/filter-category/filter-category.component';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatSelectModule} from "@angular/material/select"
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderAccountComponent } from '../components/header-account/header-account.component';
import { ReivewsProductComponent } from '../components/reivews-product/reivews-product.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReviewCardUserComponent } from '../components/review-card-user/review-card-user.component';
@NgModule({
  declarations: [
    FooterComponent,
    CardKProComponent,
    CategoriesKComponent,
    SearchKComponent,
    ProductsListComponent,
    FilterCategoryComponent,
    HeaderAccountComponent,
    ReivewsProductComponent,
    ReviewCardUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    FontAwesomeModule,
    MatButtonModule
  ],
  exports:[
    FooterComponent,
    CardKProComponent,
    CategoriesKComponent,
    SearchKComponent,
    ProductsListComponent,
    FilterCategoryComponent,
    HeaderAccountComponent,
    ReivewsProductComponent,
    ReviewCardUserComponent,
  ]
})
export class SharedModule { }
