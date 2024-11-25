import { Component } from '@angular/core';
import { LibrosService } from '../../../services/libros.service';
import { CarritoService } from '../../../services/carrito.service'; 

@Component({
  selector: 'app-ver-catalogo',
  templateUrl: './ver-catalogo.component.html',
  styleUrl: './ver-catalogo.component.css'
})
export class VerCatalogoComponent {
  //arrayLibros= [
  //  {
  //    id:1,
  //    nombre: 'El principito',
  //    descripcion: 'El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry',
  //    autor: 'Antoine de Saint-Exupéry',
  //  
  //  },
  

  arrayLibros:any[] = [];
  page: number = 1;
  perPage: number = 1;
  // genero: string = ''
  totalLibros: number = 0;
  cantidadDePaginas: number = (this.totalLibros/this.perPage)

  constructor(private librosService: LibrosService,private cartService:CarritoService) {}
  ngOnInit() {
    this.getLibros()
    this.librosService.generoObservable.subscribe((nuevoGenero: string) => {
      if (nuevoGenero) {
        this.getLibros();  // Llamar a getLibros cuando cambia el género
      }
    });
     
  }
  addToCart(book: any) {
    this.cartService.addToCart(book);
    console.log('Libro agregado al carrito:', book);
  }
  getLibros(): void {
    this.librosService.getLibros(this.page, this.perPage, this.librosService.getGenero()).subscribe((res: any) => {
      this.arrayLibros = res.libros;
      this.totalLibros = res.total;
      this.cantidadDePaginas = (this.totalLibros / this.perPage);
    });
  }

  nextPage(): void {
    if (this.page * this.perPage < this.totalLibros) {
      this.page++;
    }
    this.getLibros()
  }

  getPagesArray(): number[] {
    return Array(this.cantidadDePaginas).map((i) => i + 1);
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
    }
    this.getLibros()
  }
  goToPage(page: number): void {
    this.page = page;
    this.getLibros()
    
  }

}
