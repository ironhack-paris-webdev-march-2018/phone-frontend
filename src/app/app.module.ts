import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneService } from './api/phone.service';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { UserService } from './api/user.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PhoneService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
