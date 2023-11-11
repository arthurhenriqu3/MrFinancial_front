import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-wallet-form',
  templateUrl: './wallet-form.component.html',
  styleUrls: ['./wallet-form.component.css']
})
export class WalletFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Wallet>();
  @Input() btnSubmitText!:string;
  @Input() wallet!:Wallet;
  walletForm!:FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.walletForm = new FormGroup({
      id: new FormControl(this.wallet ? this.wallet.id : ''),
      name: new FormControl(this.wallet ? this.wallet.name : '', [Validators.required, Validators.min(3), Validators.max(100)]),
      status: new FormControl(this.wallet ? this.wallet.status : '', [Validators.required])
    });
  }

  public get id(){
    return this.walletForm.get('id')!;
  }

  public get name(){
    return this.walletForm.get('name')!;
  }

  public get status(){
    return this.walletForm.get('status')!;
  }

  public submit(){

    if(this.walletForm.invalid){
      return;
    }

    this.onSubmit.emit(this.walletForm.value)
  }
}
