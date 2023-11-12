import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookEntry } from 'src/app/models/book-entry';
import { Category } from 'src/app/models/category';
import { Wallet } from 'src/app/models/wallet';
import { CategoryService } from 'src/app/services/category.service';
import { WalletService } from '../../../services/wallet.service';

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

  constructor(private formBuilder:FormBuilder, private categoryService:CategoryService, private walletService:WalletService){
    this.categoryService.findAll().subscribe({next: (data) => this.categories = data});
    this.walletService.findAll().subscribe({next: (data) => this.wallets = data});
  }

  ngOnInit(): void {
    this.bookEntryForm = new FormGroup({
      id: new FormControl(this.bookEntry ? this.bookEntry.id : ''),
      name: new FormControl(this.bookEntry ? this.bookEntry.name: '', [Validators.required, Validators.min(3), Validators.max(100)]),
      value: new FormControl(this.bookEntry ? this.bookEntry.value : 0),
      date: new FormControl(this.bookEntry ? this.bookEntry.date : new Date()),
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

    let d:Date = this.date.value as Date;

    console.log(this.dateToDatabase(d));
    console.log(this.bookEntryForm.value);
    return
    this.onSubmit.emit(this.bookEntryForm.value)
  }

  private dateToDatabase(date:Date):string{
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
  }
}
