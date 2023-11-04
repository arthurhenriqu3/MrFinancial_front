import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message:string;

  constructor() {
    this.message = "";
  }

  public add(message:string){
    this.message = message;

    setTimeout(() => {
      this.clear()
    }, 3 * 1000)
  }

  public clear(){
    this.message = "";
  }
}
