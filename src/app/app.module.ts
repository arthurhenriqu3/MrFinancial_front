import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewUserComponent } from './components/pages/new-user/new-user.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListWalletComponent } from './components/pages/wallet/list-wallet/list-wallet.component';
import { UserFormComponent } from './components/form/user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NewWalletComponent } from './components/pages/wallet/new-wallet/new-wallet.component';
import { WalletFormComponent } from './components/form/wallet-form/wallet-form.component';
import { CategoryFormComponent } from './components/form/category-form/category-form.component';
import { BookEntryFormComponent } from './components/form/book-entry-form/book-entry-form.component';
import { ListCategoryComponent } from './components/pages/category/list-category/list-category.component';
import { NewCategoryComponent } from './components/pages/category/new-category/new-category.component';
import { ListBookEntryComponent } from './components/pages/bookEntry/list-book-entry/list-book-entry.component';
import { NewBookEntryComponent } from './components/pages/bookEntry/new-book-entry/new-book-entry.component';
import { ButtonComponent } from './components/shared/button/button.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewUserComponent,
    MessagesComponent,
    ListWalletComponent,
    NewUserComponent,
    UserFormComponent,
    NewWalletComponent,
    WalletFormComponent,
    CategoryFormComponent,
    BookEntryFormComponent,
    ListCategoryComponent,
    NewCategoryComponent,
    ListBookEntryComponent,
    NewBookEntryComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,

    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
