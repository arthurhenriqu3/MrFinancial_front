import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewUserComponent } from './components/pages/new-user/new-user.component';
import { ListWalletComponent } from './components/pages/wallet/list-wallet/list-wallet.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'users/new', component: NewUserComponent},
  {path: 'book-entries', loadChildren: () => import('./components/pages/book-entry/book-entry.module').then(m => m.BookEntryModule)},
  {path: 'categories', loadChildren: () => import('./components/pages/category/category.module').then(m => m.CategoryModule)},
  {path: 'user', loadChildren: () => import('./components/pages/user/user.module').then(m => m.UserModule)},
  {path: 'wallets', loadChildren: () => import('./components/pages/wallet/wallet.module').then(m => m.WalletModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
