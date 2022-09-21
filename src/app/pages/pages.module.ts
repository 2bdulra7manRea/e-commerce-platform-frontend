import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../components/header/header.component';
import { PagesBootstrapComponent } from './pages-bootstrap/pages-bootstrap.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator'; 
const routes:Routes=[
  {path:"" , component:PagesBootstrapComponent,
  children:[
    {path:"" , pathMatch:"full" , redirectTo:'/home'},
    {path:"home", component:HomeComponent},
    {path:"category/:id" , component:CategoriesComponent},
    {path:"products" , loadChildren:()=>import("./products/products.module").then((m)=>m.ProductsModule)}
  ]
},
]

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    HeaderComponent,
    PagesBootstrapComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatPaginatorModule
  ],
  bootstrap:[PagesBootstrapComponent]
})
export class PagesModule { }
