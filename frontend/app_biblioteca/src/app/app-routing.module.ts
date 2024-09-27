import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'error-page', component: ErrorPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/error-page'},
  {path: 'login', redirectTo: '/login'},
  {path: 'sign-up', redirectTo: '/sign-up'},
  {path: 'forgot-password', redirectTo: '/forgot-password'},
  {path: 'change-password', redirectTo: '/change-password'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
