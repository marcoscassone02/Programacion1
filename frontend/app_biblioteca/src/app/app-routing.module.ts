import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { UsuarioDetallesComponent } from './pages/usuario-detalles/usuario-detalles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PrestamosBibliotecarioComponent } from './pages/prestamos-bibliotecario/prestamos-bibliotecario.component';

const routes: Routes = [
{path:'libro',component: LibroComponent},
{path:'carrito',component: CarritoComponent},
{path: 'prestamos',component: PrestamosComponent},
{path: 'usuario-detalles',component: UsuarioDetallesComponent},
{path: 'usuarios',component: UsuariosComponent},
{path: 'prestamos-bibliotecario',component: PrestamosBibliotecarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
