import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { AdminListaLibrosComponent } from './pages/admin-lista-libros/admin-lista-libros.component';
import { LibroDetallesComponent } from './pages/libro-detalles/libro-detalles.component';
import { ReservaDetallesComponent } from './pages/reserva-detalles/reserva-detalles.component';
import { NavVolverComponent } from './components/nav-volver/nav-volver.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminViewComponent,
    AdminListaLibrosComponent,
    LibroDetallesComponent,
    ReservaDetallesComponent,
    NavVolverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
