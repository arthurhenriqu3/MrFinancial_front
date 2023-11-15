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
import { DetailsCategoryComponent } from './components/pages/category/details-category/details-category.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { DetailsWalletComponent } from './components/pages/wallet/details-wallet/details-wallet.component';
import { DetailsBookEntryComponent } from './components/pages/bookEntry/details-book-entry/details-book-entry.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UserLoginFormComponent } from './components/form/user-login-form/user-login-form.component';



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
    UserLoginFormComponent,
    NewWalletComponent,
    WalletFormComponent,
    CategoryFormComponent,
    BookEntryFormComponent,
    ListCategoryComponent,
    NewCategoryComponent,
    ListBookEntryComponent,
    NewBookEntryComponent,
    ButtonComponent,
    DetailsCategoryComponent,
    DetailsWalletComponent,
    DetailsBookEntryComponent,

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
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
