import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<User>();
  @Input() btnSubmitText!:string;
  @Input() user!:User;
  userForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.min(3), Validators.max(100)]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl(''),
      birthDate: new FormControl(''),
      //role: new FormControl('USER'),
      password: new FormControl('', [Validators.required, Validators.min(6),]),
      status: new FormControl(this.user ? this.user.status : '0', [Validators.required])
    });
  }

  public get id(){
    return this.userForm.get('id')!;
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
    return this.userForm.get('birthDate')!;
  }

  public get password(){
    return this.userForm.get('password')!;
  }

  public get status(){
    return this.userForm.get('status')!;
  }
/*
  public get role(){
    return this.userForm.get('role')!;
  } */

  public submit(){

    if(this.userForm.invalid){
      return;
    }

    this.birthDate.setValue(this.dateToDatabase(this.birthDate.value as Date));
    this.onSubmit.emit(this.userForm.value);

  }

private dateToDatabase(date:Date):string{
  return date.getFullYear() + '-' + this.formatDate(date.getMonth()) + '-' + this.formatDate(date.getDate());
}

private formatDate(date:number):string{
  return date < 10 ? "0"+date : ""+date;
}

}
