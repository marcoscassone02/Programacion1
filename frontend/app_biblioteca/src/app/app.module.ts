import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { NavVolverComponent } from './components/nav-volver/nav-volver.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { UsuarioDetallesComponent } from './pages/usuario-detalles/usuario-detalles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PrestamosBibliotecarioComponent } from './pages/prestamos-bibliotecario/prestamos-bibliotecario.component';
import { AdminListaLibrosComponent } from './pages/admin-lista-libros/admin-lista-libros.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { LibroDetallesComponent } from './pages/libro-detalles/libro-detalles.component';
import { ReservaDetallesComponent } from './pages/reserva-detalles/reserva-detalles.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { NavCatalogoComponent } from './components/nav-catalogo/nav-catalogo.component';
import { VerCarritoComponent } from './components/carrito/ver-carrito/ver-carrito.component';
import { VerPrestamosComponent } from './components/prestamos/ver-prestamos/ver-prestamos.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerCatalogoComponent } from './components/catalogo/ver-catalogo/ver-catalogo.component';
import { VerUsersComponent } from './components/usuarios/ver-users/ver-users.component';
import { VerPrestamosAdminComponent } from './components/prestamos-admin/ver-prestamos-admin/ver-prestamos-admin.component';
import { VerLibrosadminComponent } from './components/librosadmin/ver-librosadmin/ver-librosadmin.component';
import { AddLibrosComponent } from './components/addlibros/add-libros/add-libros.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button/delete-button.component';
import { EditButtonComponent } from './components/edit-button/edit-button/edit-button.component';
import { AddusersComponent } from './components/addusers/addusers/addusers.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    NavVolverComponent,
    PrestamosComponent,
    UsuarioDetallesComponent,
    UsuariosComponent,
    PrestamosBibliotecarioComponent,
    AdminListaLibrosComponent,
    AdminViewComponent,
    LibroDetallesComponent,
    ReservaDetallesComponent,
    HomeComponent,
    ErrorPageComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    SubmitButtonComponent,
    CatalogoComponent,
    NavCatalogoComponent,
    VerCarritoComponent,
    VerPrestamosComponent,
    VerCatalogoComponent,
    VerUsersComponent,
    VerPrestamosAdminComponent,
    VerLibrosadminComponent,
    AddLibrosComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    AddusersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
