import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {UserServiceClient} from './services/user.service.client';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule
  ],
  providers: [
    UserServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
