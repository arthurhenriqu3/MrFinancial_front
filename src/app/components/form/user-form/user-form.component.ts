import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<User>();
  @Input() btnSubmitText!:string;
  userForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('Angular', [Validators.required, Validators.min(3), Validators.max(100)]),
      email: new FormControl('angular@gmail.com', [Validators.required]),
      phone: new FormControl(''),
      birthDate: new FormControl(''),
      password: new FormControl('12345A', [Validators.required, Validators.min(6),]),
      status: new FormControl('ACTIVE', [Validators.required])
    });
  }

  public get name(){
    return this.userForm.get('name')!;
  }

  public get email(){
    return this.userForm.get('email')!;
  }

  public get phone(){
    return this.userForm.get('phone');
  }

  public get birthDate(){
    return this.userForm.get('birthDate');
  }

  public get password(){
    return this.userForm.get('password')!;
  }

  public get status(){
    return this.userForm.get('status')!;
  }
/*
  public onFileSelected(event:any){
    const file: File = event?.target.files[0];
    this.userForm.patchValue({image:file});
  } */

  public submit(){

    if(this.userForm.invalid){
      return;
    }

    this.onSubmit.emit(this.userForm.value)
  }

}
