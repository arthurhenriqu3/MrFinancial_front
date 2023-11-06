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
  baseApiUrl: string;

  constructor(private categoryService:CategoryService){
    this.categories = [];
    this.baseApiUrl = environment.baseApiUrl;
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe((items) => {
      this.categories = items;
    })
  }

}
