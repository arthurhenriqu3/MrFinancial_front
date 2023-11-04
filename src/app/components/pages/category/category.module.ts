import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { FormCategoryComponent } from './form-category/form-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';


@NgModule({
  declarations: [
    FormCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
