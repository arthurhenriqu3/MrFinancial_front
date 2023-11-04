import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookEntryRoutingModule } from './book-entry-routing.module';
import { ListBookEntryComponent } from './list-book-entry/list-book-entry.component';
import { FormBookEntryComponent } from './form-book-entry/form-book-entry.component';


@NgModule({
  declarations: [
    ListBookEntryComponent,
    FormBookEntryComponent
  ],
  imports: [
    CommonModule,
    BookEntryRoutingModule
  ]
})
export class BookEntryModule { }
