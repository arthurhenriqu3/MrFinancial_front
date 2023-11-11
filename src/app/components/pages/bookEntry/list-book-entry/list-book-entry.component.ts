import { environment } from 'src/environments/environment';
import { BookEntryService } from './../../../../services/book-entry.service';
import { Component } from '@angular/core';
import { BookEntry } from 'src/app/models/book-entry';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-book-entry',
  templateUrl: './list-book-entry.component.html',
  styleUrls: ['./list-book-entry.component.css']
})
export class ListBookEntryComponent {
  bookEntries$: Observable<BookEntry[]>;
  actionText:string;
  actionUri:string;

  baseUri: string;
  displayedColumns: string[];

  constructor(private bookEntryService:BookEntryService){
    this.baseUri = '/book-entry/';
    this.actionText = '';
    this.actionUri = this.baseUri + 'new'

    this.displayedColumns = ['date', 'name', 'value', 'parent', 'status', 'action'];
    this.bookEntries$ = bookEntryService.findAll();
  }
}
