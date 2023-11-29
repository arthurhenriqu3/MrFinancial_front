import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public hasUserLogged():Boolean{
    return localStorage.getItem("user-token") ? true : false;
  }

}
