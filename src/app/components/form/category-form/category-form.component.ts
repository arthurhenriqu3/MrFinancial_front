import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  @Output() onSubmit = new EventEmitter<Category>();
  @Input() btnSubmitText!:string;
  categoryForm!:FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('Angular', [Validators.required, Validators.min(3), Validators.max(50)]),
      description: new FormControl('Angular Description'),
      image: new FormControl(''),
      category_id: new FormControl(),
      type: new FormControl('REVENUE', [Validators.required]),
      status: new FormControl('ACTIVE', [Validators.required])
    });
  }

  public get id(){
    return this.categoryForm.get('id')!;
  }

  public get name(){
    return this.categoryForm.get('name')!;
  }

  public get description(){
    return this.categoryForm.get('description')!;
  }

  public get image(){
    return this.categoryForm.get('image')!;
  }

  public get parent(){
    return this.categoryForm.get('parent')!;
  }

  public get type(){
    return this.categoryForm.get('type')!;
  }

  public get status(){
    return this.categoryForm.get('status')!;
  }

  public submit(){

    if(this.categoryForm.invalid){
      return;
    }

    this.onSubmit.emit(this.categoryForm.value)
  }

}
