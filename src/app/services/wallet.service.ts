import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Response } from '../models/response';
import { Wallet } from '../models/wallet';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private apiUrl:string;

  constructor(private http:HttpClient) {
    this.apiUrl = environment.API_HOST + 'wallet';
  }
  public create(wallet: Wallet): Observable<Wallet> {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("user-token") };
    return this.http.post<Wallet>(this.apiUrl, wallet, {headers});
  }

  public register(wallet: Wallet): Observable<Wallet> {
    if(wallet.id){
      return this.update(wallet);
    }else{
      return this.insert(wallet);
    }
  }

  public insert(wallet: Wallet): Observable<Wallet> {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("user-token") };
    return this.http.post<Wallet>(this.apiUrl, wallet, {headers});
  }

  public update(wallet:Wallet):Observable<Wallet>{
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("user-token") };
    return this.http.put<Wallet>(this.apiUrl, wallet, {headers});
  }

  public delete(id:string){
    this.http.delete(this.apiUrl+"/"+id).subscribe();
  }

  public findById(id:string): Observable<Wallet>{
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("user-token") };
    return this.http.get<Wallet>(this.apiUrl + '/' + id, {headers});
  }

  public findAll(): Observable<Wallet[]>{
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("user-token") };
    return this.http.get<Wallet[]>(this.apiUrl, {headers});
  }
}
