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
  constructor(private librosService: LibrosService,private cartService:CartService) {}
  ngOnInit() {
    this.librosService.getLibros().subscribe((res:any) => {
      this.arrayLibros = res.libros;
    });
  }
  addToCart(book: any) {
    this.cartService.addToCart(book);
    console.log('Libro agregado al carrito:', book);
  }

}
