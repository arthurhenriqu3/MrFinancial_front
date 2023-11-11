import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() actionText:string;
  @Input() actionUri:string;
  @Input() colorButton:string;

  constructor(private router:Router){
    this.actionText="Cadastrar";
    this.actionUri="";
    this.colorButton="primary";
  }

  public navigate(uri:string){
    this.router.navigate([uri]);
  }
}
