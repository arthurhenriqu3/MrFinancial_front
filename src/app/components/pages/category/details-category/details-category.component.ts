import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {

  currentCategory!:Category;
  btnSubmitText:string;

  constructor(private categoryService:CategoryService ,private messageService:MessageService, private router:Router, private route:ActivatedRoute){
    this.btnSubmitText="Registrar";
  }

  ngOnInit(): void {
    this.findById("")
  }

  public async findById(id:string){
    this.categoryService.findById(this.route.snapshot.paramMap.get('id')!).subscribe({
      next: (e) => {
        this.currentCategory = e;
        return e;
      },
      error: () => {
        console.log("Error.")
      },
      complete: () => {
        console.log("Complete.")
      }
    });
  }

  public async createHandler(category:Category){
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
