import { Component } from '@angular/core';
import { LibrosService } from '../../../services/libros.service';
import { CartService } from '../../../services/carrito.service'; 

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
  constructor(private librosService: LibrosService,private cartService:CartService) {}
  ngOnInit() {
    this.getLibros()
     
  }
  addToCart(book: any) {
    this.cartService.addToCart(book);
    console.log('Libro agregado al carrito:', book);
  }
  getLibros(): void {
    this.librosService.getLibros(this.page, this.perPage).subscribe((res: any) => {
      this.arrayLibros = res.libros;
      this.totalLibros = res.total;
    });
  }
  nextPage(): void {
    if (this.page * this.perPage < this.totalLibros) {
      this.page++;
      this.getLibros();
    }
  }
  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.getLibros();
    }
  }
  goToPage(page: number): void {
    this.page = page;
    this.getLibros();
  }
}
