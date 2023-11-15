import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from 'src/app/models/user-login';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrl: './user-login-form.component.css'
})
export class UserLoginFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<UserLogin>();
  @Input() btnSubmitText!:string;
  userLoginForm!:FormGroup;

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  public get login(){
    return this.userLoginForm.get('login')!;
  }

  public get password(){
    return this.userLoginForm.get('password')!;
  }

  public submit(){
    if(this.userLoginForm.invalid){
      return;
    }

    this.onSubmit.emit(this.userLoginForm.value)
  }

}
