import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent{

  category!:Category;
  btnSubmitText:string;

  constructor(private categoryService:CategoryService ,private messageService:MessageService, private router:Router, private route:ActivatedRoute){
    this.btnSubmitText="Registrar";

    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      categoryService.findById(id).subscribe({
        next: (category) => this.category = category
      })
    }else{
      throw new Error('');
    }
  }

  public async createHandler(category:Category){
    this.messageService.add("Carregando....");

    await this.categoryService.register(category).subscribe({
      next: (category:Category) => {
        if(category.id){
          this.messageService.add("Categoria registrada com sucesso.");
          this.router.navigate(['/category']);
        }
      },
      error: (err: Error) => {
        this.messageService.add("Erro ao adicionar categoria. " + err.message);
      } ,
      complete: () => {}
    });
  }

}
