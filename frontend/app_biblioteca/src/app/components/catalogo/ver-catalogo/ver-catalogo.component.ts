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
  perPage: number = 2;
  totalLibros: number = 0;
  cantidadDePaginas: number = Math.ceil(this.totalLibros/this.perPage)

  constructor(private librosService: LibrosService,private cartService:CarritoService) {}
  ngOnInit() {
    this.getLibros()
    this.librosService.generoObservable.subscribe((nuevoGenero: string) => {
        this.getLibros();  // Llamar a getLibros cuando cambia el género
    })
    this.librosService.terminoBusquedaObservable.subscribe((nuevaBusqueda: string) => {
        this.getLibros();  // Llamar a getLibros cuando cambia la búsqueda
    })
    ;
     
  }
  addToCart(book: any) {
    const exists = this.cartService.getCart().some((item: any) => item.id === book.id);
    if (!exists) {
      this.cartService.addToCart(book);
      console.log('Libro agregado al carrito:', book);
    } else {
      console.warn('El libro ya está en el carrito:', book);
    }
  }
  isInCart(book: any): boolean {
    return this.cartService.getCart().some((item: any) => item.id === book.id);
  }
  getLibros(): void {
    this.librosService.getLibros(this.page, this.perPage, this.librosService.getGenero(), this.librosService.getBusqueda()).subscribe((res: any) => {
      this.arrayLibros = res.libros;
      this.totalLibros = res.total;
      this.cantidadDePaginas = Math.ceil(this.totalLibros / this.perPage);
    });
  }

  nextPage(): void {
    if (this.page * this.perPage < this.totalLibros) {
      this.page++;
    }
    this.getLibros()
  }

  getPagesArray(): number[] {
  return Array.from({ length: this.cantidadDePaginas }, (_, i) => i + 1);
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
