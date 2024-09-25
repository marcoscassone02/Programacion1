import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';

const routes: Routes = [
{path:'libro',component: LibroComponent},
{path:'carrito',component: CarritoComponent},
{path: 'prestamos',component: PrestamosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
