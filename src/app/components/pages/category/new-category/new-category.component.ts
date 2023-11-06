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
    console.log("Categoria...")
    console.log(category);

    if(category.parent){
      category.parent.id = "Arthur";
      console.log(category.parent?.id);
    }



return
    this.messageService.add("Carregando....");

    await this.categoryService.create(category).subscribe({
      next: (category:Category) => {
        if(category.id){
          this.messageService.add("Categoria adicionada com sucesso.");
          this.router.navigate(['/category']);
        }
      },
      error: (err: Error) => {
        this.messageService.add("Erro ao adicionar carteira.");
        console.error("Observer got an error: " + err);
      } ,
      complete: () => console.log("Observer got a complete notification.")
    });
  }
}
