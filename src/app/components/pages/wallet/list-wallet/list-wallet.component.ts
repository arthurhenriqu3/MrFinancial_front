import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';

import { Wallet } from 'src/app/models/wallet';
import { environment } from 'src/environments/environment';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-list-wallet',
  templateUrl: './list-wallet.component.html',
  styleUrls: ['./list-wallet.component.css']
})
export class ListWalletComponent implements OnInit {

  allWallets: Wallet[];
  wallets: Wallet[];
  actionText:string;
  actionUri:string;
  baseApiUrl: string;

  constructor(private walletService:WalletService){
    this.allWallets=[];
    this.wallets=[];
    this.baseApiUrl = '';
    this.actionText="";
    this.actionUri="wallet/new";
  }
  ngOnInit(): void {
    this.walletService.getWallets().subscribe((items) => {
      this.wallets = items;
    })
  }
}
