import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './pages/libro/libro.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { NavVolverComponent } from './components/nav-volver/nav-volver.component';
import { NavCarritoComponent } from './components/nav-carrito/nav-carrito.component';
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
import { BotonGenerosCatalogoComponent } from './components/boton-generos-catalogo/boton-generos-catalogo.component';
import { ResultadoCatalogoComponent } from './components/resultado-catalogo/resultado-catalogo.component';
import { PaginationCatalogoComponent } from './components/pagination-catalogo/pagination-catalogo.component';
import { VerCarritoComponent } from './components/carrito/ver-carrito/ver-carrito.component';
import { VerPrestamosComponent } from './components/prestamos/ver-prestamos/ver-prestamos.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerCatalogoComponent } from './components/catalogo/ver-catalogo/ver-catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    CarritoComponent,
    NavVolverComponent,
    NavCarritoComponent,
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
    BotonGenerosCatalogoComponent,
    ResultadoCatalogoComponent,
    PaginationCatalogoComponent,
    VerCarritoComponent,
    VerPrestamosComponent,
    VerCatalogoComponent,

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
