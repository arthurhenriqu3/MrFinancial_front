import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/user.service';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/user-login';
import { LoginResponse } from 'src/app/models/login-response';

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

  async createHandlerLogin(userLogin:UserLogin){
    this.messageService.add("Carregando....");

    await this.userService.login(userLogin).subscribe({
      next: (loginResponse:LoginResponse) => {
        if(loginResponse.token){
          localStorage.setItem("user-token", loginResponse.token)
          this.router.navigate(['/']);
        }
      },
      error: (err: Error) => {
        this.messageService.add("Erro ao adicionar usuário.");
        console.error("Observer got an error: " + err);
      } ,
      complete: () => console.log("Observer got a complete notification.")
    });
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
  }
}
