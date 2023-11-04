import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { ListWalletComponent } from './list-wallet/list-wallet.component';
import { FormWalletComponent } from './form-wallet/form-wallet.component';


@NgModule({
  declarations: [
    ListWalletComponent,
    FormWalletComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
