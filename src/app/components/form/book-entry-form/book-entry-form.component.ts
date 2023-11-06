import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookEntry } from 'src/app/models/book-entry';

@Component({
  selector: 'app-book-entry-form',
  templateUrl: './book-entry-form.component.html',
  styleUrls: ['./book-entry-form.component.css']
})
export class BookEntryFormComponent {
  @Output() onSubmit = new EventEmitter<BookEntry>();
  @Input() btnSubmitText!:string;
  bookEntryForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.bookEntryForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('Angular', [Validators.required, Validators.min(3), Validators.max(100)]),
      value: new FormControl(0),
      date: new FormControl('2023-11-06'),
      category: this.formBuilder.group({id:""}),
      wallet: this.formBuilder.group({id:""}),
      status: new FormControl('ACTIVE', [Validators.required])
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

    this.onSubmit.emit(this.bookEntryForm.value)
  }
}
