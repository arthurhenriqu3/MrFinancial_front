import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewUserComponent } from './components/pages/new-user/new-user.component';
import { ListWalletComponent } from './components/pages/wallet/list-wallet/list-wallet.component';
import { NewWalletComponent } from './components/pages/wallet/new-wallet/new-wallet.component';
import { ListCategoryComponent } from './components/pages/category/list-category/list-category.component';
import { NewCategoryComponent } from './components/pages/category/new-category/new-category.component';
import { ListBookEntryComponent } from './components/pages/bookEntry/list-book-entry/list-book-entry.component';
import { NewBookEntryComponent } from './components/pages/bookEntry/new-book-entry/new-book-entry.component';
import { DetailsCategoryComponent } from './components/pages/category/details-category/details-category.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},

  // User
  {path: 'user/new', component: NewUserComponent},

  // Wallet
  {path: 'wallet', component: ListWalletComponent},
  {path: 'wallet/new', component: NewWalletComponent},

  // Book Entry
  {path: 'book-entry', component: ListBookEntryComponent},
  {path: 'book-entry/new', component: NewBookEntryComponent},

  // Category
  {path: 'category', component: ListCategoryComponent},
  {path: 'category/new', component: NewCategoryComponent},
  {path: 'category/:id', component: DetailsCategoryComponent},

  //{path: 'book-entries', loadChildren: () => import('./components/pages/book-entry/book-entry.module').then(m => m.BookEntryModule)},
  //{path: 'categories', loadChildren: () => import('./components/pages/category/category.module').then(m => m.CategoryModule)},
  //{path: 'user', loadChildren: () => import('./components/pages/user/user.module').then(m => m.UserModule)},
  //{path: 'wallets', loadChildren: () => import('./components/pages/wallet/wallet.module').then(m => m.WalletModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
