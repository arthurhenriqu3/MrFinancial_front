import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookEntry } from 'src/app/models/book-entry';
import { BookEntryService } from 'src/app/services/book-entry.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-details-book-entry',
  templateUrl: './details-book-entry.component.html',
  styleUrls: ['./details-book-entry.component.css']
})
export class DetailsBookEntryComponent {

  bookEntry!:BookEntry;
  btnSubmitText:string;

  constructor(private bookEntryService:BookEntryService, private messageService:MessageService, private router:Router, private route:ActivatedRoute){
    this.btnSubmitText="Registrar";

    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      bookEntryService.findById(id).subscribe({
        next: (data) => this.bookEntry = data
      })
    }else{
      throw new Error('');
    }
  }

  public async createHandler(bookEntry:BookEntry){
    this.messageService.add("Carregando....");

    await this.bookEntryService.register(bookEntry).subscribe({
      next: (bookEntry:BookEntry) => {
        if(bookEntry.id){
          this.messageService.add("Carteira registrada com sucesso.");
          this.router.navigate(['/book-entry']);
        }
      },
      error: (err: Error) => {
        this.messageService.add("Erro ao adicionar lançamento. " + err.message);
      } ,
      complete: () => {}
    });
  }

}
