import { Component } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from '../../../../services/wallet.service';
import { MessageService } from 'src/app/services/message.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-wallet',
  templateUrl: './details-wallet.component.html',
  styleUrls: ['./details-wallet.component.css']
})
export class DetailsWalletComponent {

  wallet!:Wallet;
  btnSubmitText:string;

  constructor(private walletService:WalletService, private messageService:MessageService, private router:Router, private route:ActivatedRoute){
    this.btnSubmitText="Registrar";

    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      walletService.findById(id).subscribe({
        next: (data) => this.wallet = data
      })
    }else{
      throw new Error('');
    }
  }

  public async createHandler(wallet:Wallet){
    this.messageService.add("Carregando....");

    await this.walletService.register(wallet).subscribe({
      next: (wallet:Wallet) => {
        if(wallet.id){
          this.messageService.add("Carteira registrada com sucesso.");
          this.router.navigate(['/wallet']);
        }
      },
      error: (err: Error) => {
        this.messageService.add("Erro ao adicionar categoria. " + err.message);
      } ,
      complete: () => {}
    });
  }

}
