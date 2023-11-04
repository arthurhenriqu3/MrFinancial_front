import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  btnSubmitText:string;

  constructor(private userService:UserService){
    this.btnSubmitText = "Registrar";
  }

  async createHandler(user:User){
    console.log(user)
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

    // TODO

    // send to service
    await this.userService.createUser(user).subscribe({
      next: (user:User) => {console.log("Observer got a next value: ")},
      error: (err: Error) => console.error("Observer got an error: " + err),
      complete: () => console.log("Observer got a complete notification.")
    });

    // show message

    // redirect
  }


}
