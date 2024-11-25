import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service'

@Component({
  selector: 'app-ver-users',
  templateUrl: './ver-users.component.html',
  styleUrl: './ver-users.component.css'
})
export class VerUsersComponent {
//   arrayUsuarios = [
//     {
//       apellido: "Gomez",
//       contraseña: "scrypt:32768:8:1$Jdl24aWsgcyOUMy5$b4c4dfa1992970256c853973f31c54dbd09de1a4ce945d4ba7cdaf078874aa130532f590b4394498e49efc6426160fd6c2dcbff21cc29b916d07cfeae2d801d0",
//       correo: "correo123@gmail.com",
//       id: 1,
//       nombre: "Gabi",
//       rol: "admin",
//       telefono: 12345678910
//   },
//   {
//       apellido: "Gomez",
//       contraseña: "scrypt:32768:8:1$gpLJqMk6n3bPSAEf$c8ea330877648faf66ff9469452a727f25d76922a31a3bc6792be1630977218c3567acb3cbc23a55382c5a24176ab71bbc62a797cb473c4f2acd8863cefc298e",
//       correo: "correo1234@gmail.com",
//       id: 2,
//       nombre: "Emi",
//       rol: "user",
//       telefono: 12345678910
//   },
//   {
//       apellido: "Gomez",
//       contraseña: "scrypt:32768:8:1$8KH1uNvosRQAvsb5$1c2aefc616db65446990ef5e3e7fc7e33b445fa09d1a1206648dc9682a74cce27a97ae68d57cb2bbcf7f4661a0be009948847486b1c0446bce52130c9941862c",
//       correo: "correo12345@gmail.com",
//       id: 3,
//       nombre: "marcos",
//       rol: "user",
//       telefono: 12345678910
//   },
//   {
//       apellido: "Gomez",
//       contraseña: "scrypt:32768:8:1$b1uDCafGdP82dLLt$27af61e42251f725320faa5c0ff2ce62bcc4d6e3e99f4d8d532f15d5104c4f95376d8f3a3826ecc2952ae0cd08acfd97957003bbbeabd215effdc6433fd02d23",
//       correo: "correo123456@gmail.com",
//       id: 4,
//       nombre: "maxi",
//       rol: "user",
//       telefono: 12345678910
//   }
//   ]
// }

  arrayUsuarios:any[] = []

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ){

  } 

  ngOnInit() {
    this.usuariosService.getUsers().subscribe((rta:any) => {
      console.log('usuarios api: ',rta);
      this.arrayUsuarios = rta.usuarios || [];
    })
  }



}
