import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { AdminListaLibrosComponent } from './pages/admin-lista-libros/admin-lista-libros.component';
import { LibroDetallesComponent } from './pages/libro-detalles/libro-detalles.component';
import { ReservaDetallesComponent } from './pages/reserva-detalles/reserva-detalles.component';

const routes: Routes = [
  { path: "admin-view", component: AdminViewComponent},
  { path: "admin-lista-libros", component: AdminListaLibrosComponent},
  { path: "libro-detalles", component: LibroDetallesComponent},
  { path: "reserva-detalles", component: ReservaDetallesComponent},
  { path: "", redirectTo: "admin-view", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
