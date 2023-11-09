import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environments/environment';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories: Category[];
  baseUri: string;
  actionText: string;
  actionUri: string;
  displayedColumns: string[];


  constructor(private categoryService:CategoryService){
    this.categories = [];
    this.baseUri = '/category/';
    this.actionText="";
    this.actionUri="category/new";
    this.displayedColumns = ['type', 'name', 'parent', 'status', 'action'];
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe((items) => {
      this.categories = items;
    })
  }

}
