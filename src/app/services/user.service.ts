import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserLogin } from '../models/user-login';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseApiUrl = environment.API_HOST;
  private apiUrl = `${this.baseApiUrl}user`;

  constructor(private http:HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  public register(user: User){
    if(user.id){
      this.update()
    }else{
      this.create();
    }
  }

  public create(){

  }

  public update(){
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("user-token") };
    console.log(headers);

    //this.http.post<LoginResponse>("http://localhost:8080/auth/register", userLogin).subscribe();
  }

  public login(userLogin: UserLogin): Observable<LoginResponse>{
    return this.http.post<LoginResponse>("http://localhost:8080/auth/login", userLogin);
  }

}
