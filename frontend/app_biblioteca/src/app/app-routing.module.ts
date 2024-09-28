import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { UsuarioDetallesComponent } from './pages/usuario-detalles/usuario-detalles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PrestamosBibliotecarioComponent } from './pages/prestamos-bibliotecario/prestamos-bibliotecario.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { AdminListaLibrosComponent } from './pages/admin-lista-libros/admin-lista-libros.component';
import { LibroDetallesComponent } from './pages/libro-detalles/libro-detalles.component';
import { ReservaDetallesComponent } from './pages/reserva-detalles/reserva-detalles.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';



const routes: Routes = [
{path:'libro',component: LibroComponent},
{path:'carrito',component: CarritoComponent},
{ path: 'catalogo', component: CatalogoComponent},
{path: 'prestamos',component: PrestamosComponent},
{path: 'usuario-detalles',component: UsuarioDetallesComponent},
{path: 'usuarios',component: UsuariosComponent},
{path: 'prestamos-bibliotecario',component: PrestamosBibliotecarioComponent},
{ path: "admin-view", component: AdminViewComponent},
{ path: "admin-lista-libros", component: AdminListaLibrosComponent},
{ path: "libro-detalles", component: LibroDetallesComponent},
{ path: "reserva-detalles", component: ReservaDetallesComponent},
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
{path: 'change-password', redirectTo: '/change-password'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
