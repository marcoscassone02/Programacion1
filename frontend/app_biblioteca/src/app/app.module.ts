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
    ReservaDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
