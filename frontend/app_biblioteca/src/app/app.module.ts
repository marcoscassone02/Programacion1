import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    SubmitButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
