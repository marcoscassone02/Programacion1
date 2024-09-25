import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { AdminListaLibrosComponent } from './pages/admin-lista-libros/admin-lista-libros.component';
import { LibroDetallesComponent } from './pages/libro-detalles/libro-detalles.component';
import { ReservaDetallesComponent } from './pages/reserva-detalles/reserva-detalles.component';

const routes: Routes = [
  { path: "app-admin-view", component: AdminViewComponent},
  { path: "app-admin-lista-libros", component: AdminListaLibrosComponent},
  { path: "app-libro-detalles", component: LibroDetallesComponent},
  { path: "app-reserva-detalles", component: ReservaDetallesComponent},
  { path: "", redirectTo: "app-admin-view", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
