import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookEntry } from 'src/app/models/book-entry';
import { BookEntryService } from 'src/app/services/book-entry.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-new-book-entry',
  templateUrl: './new-book-entry.component.html',
  styleUrls: ['./new-book-entry.component.css']
})
export class NewBookEntryComponent {

  btnSubmitText:string;
  bookEntry!:BookEntry;

  constructor(private bookEntryService:BookEntryService ,private messageService:MessageService, private router:Router){
    this.btnSubmitText="Registrar";
    this.bookEntry = {
      name: '',
      value: 0,
      status: '0'
    }
  }

  public async createHandler(bookEntry:BookEntry){
    this.messageService.add("Carregando....");

    await this.bookEntryService.create(bookEntry).subscribe({
      next: (bookEntry:BookEntry) => {
        if(bookEntry.id){
          this.messageService.add("Lançamento adicionado com sucesso.");
          this.router.navigate(['/book-entry']);
        }
      },
      error: (err: Error) => {
        this.messageService.add("Erro ao adicionar lançamento.");
        console.error("Observer got an error: " + err);
      } ,
      complete: () => console.log("Observer got a complete notification.")
    });
  }

}
