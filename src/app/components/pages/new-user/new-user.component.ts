import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  btnSubmitText:string;

  constructor(){
    this.btnSubmitText = "Registrar";
  }

  async createHandler(user:User){
    const formData = new FormData();

    if(user.id){
      formData.append("id", user.id);
    }

    if(user.phone){
      formData.append("phone", user.phone);
    }

    if(user.birthDate){
      formData.append("birthDate", user.birthDate);
    }

    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("status", user.status);
  }
}
