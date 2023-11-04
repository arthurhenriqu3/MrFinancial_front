import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListWalletComponent } from './list-wallet/list-wallet.component';
import { FormWalletComponent } from './form-wallet/form-wallet.component';

const routes: Routes = [
  {path: '', component: ListWalletComponent},
  {path: 'new', component: FormWalletComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
