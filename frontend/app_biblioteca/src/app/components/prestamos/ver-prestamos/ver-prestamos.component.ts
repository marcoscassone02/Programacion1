import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-prestamos',
  templateUrl: './ver-prestamos.component.html',
  styleUrl: './ver-prestamos.component.css'
})
export class VerPrestamosComponent {
arrayPrestamos = [
  {
    id: 1,
    libros:[
      {
        id:1,
        nombre: 'El principito',
        descripcion: 'El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry',
        autor: 'Antoine de Saint-Exupéry',
      },
      {
        id:2,
        nombre: 'Cien años de soledad',
        descripcion: 'Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez',
        autor: 'Gabriel García Márquez',
      },
      {
        id:3,
        nombre: 'El alquimista',
        descripcion: 'El alquimista es una novela escrita por el brasileño Paulo Coelho',
        autor: 'Paulo Coelho',
      }
    ]
  },
  {
    id: 2,
    libros:[
      {
        id:4,
        nombre: 'El arte de amar',
        descripcion: 'El arte de amar es un libro escrito por el psicoanalista y filósofo social Erich Fromm',
        autor: 'Erich Fromm',
      },
      {
        id:5,
        nombre: 'El perfume',
        descripcion: 'El perfume es una novela del escritor alemán Patrick Süskind',
        autor: 'Patrick Süskind',
      },
      {
        id:6,
        nombre: 'El amor en los tiempos del cólera',
        descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
        autor: 'Gabriel García Márquez',
      }
    ]
  },
  {
    id: 3,
    libros:[
      {
        id:7,
        nombre: 'El amor en los tiempos del cólera',
        descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
        autor: 'Gabriel García Márquez',
      },
      {
        id:8,
        nombre: 'El amor en los tiempos del cólera',
        descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
        autor: 'Gabriel García Márquez',
      },
      {
        id:9,
        nombre: 'El amor en los tiempos del cólera',
        descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
        autor: 'Gabriel García Márquez',
      }
    ]
  },
  {
    id: 4,
    libros:[
      {
        id:10,
        nombre: 'El amor en los tiempos del cólera',
        descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
        autor: 'Gabriel García Márquez',
      },
      {
        id:11,
        nombre: 'El amor en los tiempos del cólera',
        descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
        autor: 'Gabriel García Márquez',
      },
      {
        id:12,
        nombre: 'El amor en los tiempos del cóleraa',
        descripcion: 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez',
        autor: 'Gabriel García Márquez',
      }
    ]
  }
]
}
