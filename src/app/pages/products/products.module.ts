import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductQuickViewComponent } from './product-quick-view/product-quick-view.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { RouterModule, Routes } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion'
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
const routes:Routes =[
{path:"product-details/:id",component:ProductDetailsComponent},
]

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductQuickViewComponent,
    ProductCategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    FormsModule,
    SharedModule
  ],
  exports:[ProductDetailsComponent]
})
export class ProductsModule { }
