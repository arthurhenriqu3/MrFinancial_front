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
import { UserFormComponent } from './components/form/user-form/user-form.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserModule } from './components/pages/user/user.module';
import { CategoryModule } from './components/pages/category/category.module';
import { BookEntryModule } from './components/pages/book-entry/book-entry.module';
import { WalletModule } from './components/pages/wallet/wallet.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewUserComponent,
    UserFormComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,

    BookEntryModule,
    CategoryModule,
    UserModule,
    WalletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
