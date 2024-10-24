import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrestamosService } from '../../../services/prestamos.service'

@Component({
  selector: 'app-ver-prestamos-admin',
  templateUrl: './ver-prestamos-admin.component.html',
  styleUrl: './ver-prestamos-admin.component.css'
})
export class VerPrestamosAdminComponent {
  // arrayPrestamosAdmin = [
  //   {
  //     id: 1,
  //     estado: 'en prestamo',
  //     fecha_prestamo: '2021-07-01',
  //     fecha_devolucion: '2021-07-08',
  //     usuario_id: 1,
  //     libros:[
  //       {
  //         id:1,
  //         nombre: 'El principito',
  //         descripcion: 'El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry',
  //         autor: 'Antoine de Saint-Exupéry',
  //       },
  //       {
  //         id:2,
  //         nombre: 'Cien años de soledad',
  //         descripcion: 'Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez',
  //         autor: 'Gabriel García Márquez',
  //       },
  //       {
  //         id:3,
  //         nombre: 'El alquimista',
  //         descripcion: 'El alquimista es una novela escrita por el brasileño Paulo Coelho',
  //         autor: 'Paulo Coelho',
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     estado: 'en prestamo',
  //     fecha_prestamo: '2024-06-02',
  //     fecha_devolucion: '2025-10-08',
  //     usuario_id: 2,
  //     libros:[
  //       {
  //         id:4,
  //         nombre: 'El arte de amar',
  //         descripcion: 'El arte de amar es un libro escrito por el psicoanalista y filósofo social Erich Fromm',
  //         autor: 'Erich Fromm',
  //       },
  //       {
  //         id:5,
  //         nombre: 'El perfume',
  //         descripcion: 'El perfume es una novela del escritor alemán Patrick Süskind',
  //         autor: 'Patrick Süskind',
  //       },
  //       {
  //         id:6,
  //         nombre: 'El amor en los tiempos del cólera',
  //         descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
  //         autor: 'Gabriel García Márquez',
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     estado: 'devuelto',
  //     fecha_prestamo: '2022-07-01',
  //     fecha_devolucion: '2023-12-15',
  //     usuario_id: 3,
  //     libros:[
  //       {
  //         id:7,
  //         nombre: 'El amor en los tiempos del cólera',
  //         descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
  //         autor: 'Gabriel García Márquez',
  //       },
  //       {
  //         id:8,
  //         nombre: 'El amor en los tiempos del cólera',
  //         descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
  //         autor: 'Gabriel García Márquez',
  //       },
  //       {
  //         id:9,
  //         nombre: 'El amor en los tiempos del cólera',
  //         descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
  //         autor: 'Gabriel García Márquez',
  //       }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     estado: 'en prestamo',
  //     fecha_prestamo: '2024-07-01',
  //     fecha_devolucion: '2025-07-10',
  //     usuario_id: 1,
  //     libros:[
  //       {
  //         id:10,
  //         nombre: 'El amor en los tiempos del cólera',
  //         descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
  //         autor: 'Gabriel García Márquez',
  //       },
  //       {
  //         id:11,
  //         nombre: 'El amor en los tiempos del cólera',
  //         descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
  //         autor: 'Gabriel García Márquez',
  //       },
  //       {
  //         id:12,
  //         nombre: 'El amor en los tiempos del cóleraa',
  //         descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
  //         autor: 'Gabriel García Márquez',
  //       }
  //     ]
  //   }
  // ]

  arrayPrestamosAdmin:any[] = []

  constructor(
    private router: Router,
    private prestamosService: PrestamosService
  ){

  } 

  ngOnInit() {
    this.prestamosService.getPrestamos().subscribe((rta:any) => {
      console.log('prestamos api: ',rta);
      this.arrayPrestamosAdmin = rta.prestamos || [];
    })
  }
}
