import { environment } from 'src/environments/environment';
import { BookEntryService } from './../../../../services/book-entry.service';
import { Component } from '@angular/core';
import { BookEntry } from 'src/app/models/book-entry';

@Component({
  selector: 'app-list-book-entry',
  templateUrl: './list-book-entry.component.html',
  styleUrls: ['./list-book-entry.component.css']
})
export class ListBookEntryComponent {
  bookEntries: BookEntry[];
  baseApiUrl: string;
  actionText:string;
  actionUri:string;

  constructor(private bookEntryService:BookEntryService){
    this.bookEntries = [];
    this.baseApiUrl = '';
    this.actionText="";
    this.actionUri="book-entry/new"
  }

  ngOnInit(): void {
    this.bookEntryService.findAll().subscribe((items) => {
      this.bookEntries = items;
    })
  }
}
