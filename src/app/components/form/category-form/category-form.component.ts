import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  @Output() onSubmit = new EventEmitter<Category>();
  @Input() btnSubmitText!:string;
  @Input() currentCategory!:Category;
  categoryForm!:FormGroup;
  categories!:Category[];

  constructor(private formBuilder:FormBuilder, private categoryService:CategoryService){
    this.categoryService.findAll().subscribe({next: (data) => this.categories = data});
  }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      id: new FormControl(this.currentCategory ? this.currentCategory.id : ''),
      name: new FormControl(this.currentCategory ? this.currentCategory.name : 'Angular', [Validators.required, Validators.min(3), Validators.max(50)]),
      description: new FormControl(this.currentCategory ? this.currentCategory.description : 'Angular Description'),
      image: new FormControl(this.currentCategory ? this.currentCategory.image : ''),
      parent: this.formBuilder.group({
        id: this.currentCategory && this.currentCategory.parent ? this.currentCategory.parent.id : ''
      }),
      type: new FormControl(this.currentCategory ? this.currentCategory.type : 0, [Validators.required]),
      status: new FormControl( this.currentCategory ? this.currentCategory.status : 0, [Validators.required])
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

    /*if(this.parent.get("id")?.value==''){
      this.categoryForm.removeControl("parent")
    } */

    //console.log(this.categoryForm.value);
    //return;
    this.onSubmit.emit(this.categoryForm.value)
  }
}
