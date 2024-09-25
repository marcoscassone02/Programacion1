import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './pages/libro/libro.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { NavVolverComponent } from './components/nav-volver/nav-volver.component';
import { NavCarritoComponent } from './components/nav-carrito/nav-carrito.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    CarritoComponent,
    NavVolverComponent,
    NavCarritoComponent,
    PrestamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
