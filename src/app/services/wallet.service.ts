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

  private baseApiUrl = environment.API_HOST;
  private apiUrl = `${this.baseApiUrl}wallet`;

  constructor(private http:HttpClient) { }

  create(wallet: Wallet): Observable<Wallet> {
    return this.http.post<Wallet>(this.apiUrl, wallet);
  }

  getWallets(): Observable<Wallet[]>{
    return this.http.get<Wallet[]>(this.apiUrl);
  }
}
