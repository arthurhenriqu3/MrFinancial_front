import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  actionText:string;
  actionUri:string;

  constructor(){
    this.actionText="Cadastrar Novo";
    this.actionUri="wallet";
  }

}
