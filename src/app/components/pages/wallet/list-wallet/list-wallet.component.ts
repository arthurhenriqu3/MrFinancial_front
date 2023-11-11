import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';

import { Wallet } from 'src/app/models/wallet';
import { environment } from 'src/environments/environment';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-wallet',
  templateUrl: './list-wallet.component.html',
  styleUrls: ['./list-wallet.component.css']
})
export class ListWalletComponent{

  wallets$:Observable<Wallet[]>;
  displayedColumns: string[];
  actionText:string;
  actionUri:string;
  baseUri: string;

  constructor(private walletService:WalletService){
    this.baseUri = '/wallet/';
    this.actionText = '';
    this.actionUri = this.baseUri + 'new';
    this.displayedColumns = ['name', 'status', 'action'];
    this.wallets$ = this.walletService.findAll();
  }

  public removeElement(id:string){
    //this.walletService.delete(id);
  }
}
