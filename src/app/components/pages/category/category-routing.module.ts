import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCategoryComponent } from './form-category/form-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';

const routes: Routes = [
  {path: '', component: ListCategoryComponent},
  {path: 'new', component: FormCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
