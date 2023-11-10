import { Component, OnInit } from '@angular/core';
import { Wallet } from '../../../../models/wallet';
import { MessageService } from '../../../../services/message.service';
import { WalletService } from '../../../../services/wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-wallet',
  templateUrl: './new-wallet.component.html',
  styleUrls: ['./new-wallet.component.css']
})
export class NewWalletComponent{

  btnSubmitText:string;

  constructor(private walletService:WalletService ,private messageService:MessageService, private router:Router){
    this.btnSubmitText="Registrar";
  }

  public async createHandler(wallet:Wallet){
    this.messageService.add("Carregando....");

    await this.walletService.create(wallet).subscribe({
      next: (wallet:Wallet) => {
        if(wallet.id){
          this.messageService.add("Carteira adicionada com sucesso.");
          this.router.navigate(['/wallet']);
        }
      },
      error: (err: Error) => {
        this.messageService.add("Erro ao adicionar carteira.");
        console.error("Observer got an error: " + err);
      } ,
      complete: () => console.log("Observer got a complete notification.")
    });
  }
}
