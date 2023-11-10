import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../../../../models/category';
import { CategoryService } from 'src/app/services/category.service';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent {

  btnSubmitText:string;

  constructor(private categoryService:CategoryService ,private messageService:MessageService, private router:Router){
    this.btnSubmitText="Registrar";
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
        this.messageService.add("Erro ao adicionar carteira." + err.message);
      } ,
      complete: () => {}
    });
  }
}
