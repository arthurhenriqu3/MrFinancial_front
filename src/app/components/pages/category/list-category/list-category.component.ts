import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../../../../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  categories$: Observable<Category[]>;
  baseUri: string;
  actionText: string;
  actionUri: string;
  displayedColumns: string[];


  constructor(private categoryService:CategoryService){
    this.baseUri = '/category/';
    this.actionText="";
    this.actionUri="category/new";
    this.displayedColumns = ['type', 'name', 'parent', 'status', 'action'];
    this.categories$ = this.categoryService.findAll();
  }
}
