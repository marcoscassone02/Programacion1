import { Component } from '@angular/core';
import { PrestamosService } from '../../../services/prestamos.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-ver-prestamos',
  templateUrl: './ver-prestamos.component.html',
  styleUrl: './ver-prestamos.component.css'
})
export class VerPrestamosComponent {
//arrayPrestamos = [
//  {
//    id: 1,
//    libros:[
//      {
//        id:1,
//        nombre: 'El principito',
//        descripcion: 'El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry',
//        autor: 'Antoine de Saint-Exupéry',
//      },
//      {
//        id:2,
//        nombre: 'Cien años de soledad',
//        descripcion: 'Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez',
//        autor: 'Gabriel García Márquez',
//      },
//      {
//        id:3,
//        nombre: 'El alquimista',
//        descripcion: 'El alquimista es una novela escrita por el brasileño Paulo Coelho',
//        autor: 'Paulo Coelho',
//      }
//    ]
//  },
//]
  arrayPrestamos:any[] = []
  constructor(private prestamoservice:PrestamosService) {}
  ngOnInit() {
    this.prestamoservice.getPrestamos().subscribe((rta:any) => {
      console.log('prestamos: ',rta);
      this.arrayPrestamos= rta.prestamos || [];
    })
  }

}
