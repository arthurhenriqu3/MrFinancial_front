import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/user.service';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  btnSubmitText:string;

  constructor(private userService:UserService, private messageService:MessageService, private router:Router){
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

    this.messageService.add("Carregando....");

    await this.userService.createUser(user).subscribe({
      next: (user:User) => {
        if(user.id){
          this.messageService.add("Usuário adicionado com sucesso.");
          this.router.navigate(['/']);
        }
      },
      error: (err: Error) => {
        this.messageService.add("Erro ao adicionar usuário.");
        console.error("Observer got an error: " + err);
      } ,
      complete: () => console.log("Observer got a complete notification.")
    });






    // redirect
  }


}
