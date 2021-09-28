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
  constructor(

  ) { }

  ngOnInit(): void {
    this.ProductoService//.ProductoService
    .subscribe((respuesta) =>{
      this.productos = respuesta;
      console.log(this.productos)
    } )
  }

}
