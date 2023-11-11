import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../../../../services/category.service';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

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

  constructor(private categoryService:CategoryService, private messageService:MessageService){
    this.baseUri = '/category/';
    this.actionText="";
    this.actionUri="category/new";
    this.displayedColumns = ['type', 'name', 'parent', 'status', 'action'];
    this.categories$ = this.refresh();
  }

  public refresh(): Observable<Category[]>{
    return this.categories$ = this.categoryService.findAll()
  }

  public removeElement(id:string){
    this.categoryService.delete(id);
  }
}
