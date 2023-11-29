import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookEntry } from 'src/app/models/book-entry';
import { Category } from 'src/app/models/category';
import { Wallet } from 'src/app/models/wallet';
import { CategoryService } from 'src/app/services/category.service';
import { WalletService } from '../../../services/wallet.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-entry-form',
  templateUrl: './book-entry-form.component.html',
  styleUrls: ['./book-entry-form.component.css']
})
export class BookEntryFormComponent {
  @Output() onSubmit = new EventEmitter<BookEntry>();
  @Input() btnSubmitText!:string;
  @Input() bookEntry!:BookEntry;
  bookEntryForm!:FormGroup;
  categories!:Category[];
  wallets!:Wallet[];

  constructor(private formBuilder:FormBuilder, private categoryService:CategoryService, private walletService:WalletService, public datePipe: DatePipe){
    this.categoryService.findAll().subscribe({next: (data) => this.categories = data});
    this.walletService.findAll().subscribe({next: (data) => this.wallets = data});
  }

  ngOnInit(): void {
    const formDate = this.bookEntry.date ? this.datePipe.transform(new Date(this.bookEntry.date), "MM/dd/yyyy") : this.datePipe.transform(new Date(), "MM/dd/yyyy");

    this.bookEntryForm = new FormGroup({
      id: new FormControl(this.bookEntry ? this.bookEntry.id : ''),
      name: new FormControl(this.bookEntry ? this.bookEntry.name: '', [Validators.required, Validators.min(3), Validators.max(100)]),
      value: new FormControl(this.bookEntry ? this.bookEntry.value : 0),
      date: new FormControl<String | null>(formDate),
      category: this.formBuilder.group({
        id: this.bookEntry && this.bookEntry.category ? this.bookEntry.category.id : ''
      }),
      wallet: this.formBuilder.group({
        id: this.bookEntry && this.bookEntry.wallet ? this.bookEntry.wallet.id : ''
      }),
      status: new FormControl(this.bookEntry ? this.bookEntry.status : '0', [Validators.required])
    });
  }

  public get id(){
    return this.bookEntryForm.get('id')!;
  }

  public get name(){
    return this.bookEntryForm.get('name')!;
  }

  public get value(){
    return this.bookEntryForm.get('value')!;
  }

  public get date(){
    return this.bookEntryForm.get('date')!;
  }

  public get category(){
    return this.bookEntryForm.get('category')!;
  }

  public get wallet(){
    return this.bookEntryForm.get('wallet')!;
  }

  public get status(){
    return this.bookEntryForm.get('status')!;
  }

  public submit(){

    if(this.bookEntryForm.invalid){
      return;
    }

    this.date.setValue(this.datePipe.transform(this.date.value, "yyyy-MM-dd"));
    this.onSubmit.emit(this.bookEntryForm.value)
  }

  private dateToDatabase(date:Date):string{
    return date.getFullYear() + '-' + this.formatDate(date.getMonth()+1) + '-' + this.formatDate(date.getDate());
  }

  private formatDate(date:number):string{
    return date < 10 ? "0"+date : ""+date;
  }
}
