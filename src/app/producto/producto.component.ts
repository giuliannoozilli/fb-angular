import { ProductoService } from './../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/models/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public productos!: Producto[];
  constructor(private productoService: ProductoService) { }

  public cursos = [
    {
      nombre: 'Angular',
      descripcion: 'Curso Introductorio',
      fechaInicio: new Date('2021-12-12')
    },
    {

    }
  ]
  /*

   ██████╗ ██╗    ██╗ ██████╗
  ██╔═══██╗██║    ██║██╔═══██╗
  ██║   ██║██║ █╗ ██║██║   ██║
  ██║   ██║██║███╗██║██║   ██║
  ╚██████╔╝╚███╔███╔╝╚██████╔╝
   ╚═════╝  ╚══╝╚══╝  ╚═════╝

  */
  ngOnInit(): void {
    this.productoService.productos
    .subscribe((respuesta) =>{
      this.productos = respuesta;
      console.log(this.productos)
    } )
  }

}
