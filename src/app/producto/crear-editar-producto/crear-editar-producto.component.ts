import { Component, OnInit, Input } from '@angular/core';
//import {MostrarProductosComponent} from '../mostrar-productos/mostrar-productos.component'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { SharedService } from 'src/app/shared.service';
//import {ProductoComponent} from '../../producto/producto.component';
@Component({
  selector: 'app-crear-editar-producto',
  templateUrl: './crear-editar-producto.component.html',
  styleUrls: ['./crear-editar-producto.component.css']
})
export class CrearEditarProductoComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() producto:any;
  ProductoId:string;
  Nombre: string;
  Precio: Int16Array;
  Stock: Int16Array;

  ngOnInit(): void {
    this.ProductoId = this.producto.ProductoId;
    this.Nombre = this.producto.Nombre;
    this.Precio  = this.producto.Precio;
    this.Stock  = this.producto.stock;
  }

  crearProducto(){
    var val = {
     
      Nombre: this.Nombre,
      Precio: this.Precio,
      Stock: this.Stock
    };
    this.service.addProducto(val).subscribe(res =>{
     alert("Se ha registrado correctamente");
    });
  }

  editarProducto(){
    var val = {
      ProductoId: this.ProductoId,
      Nombre: this.Nombre,
      Precio: this.Precio,
      Stock: this.Stock
    };
    this.service.updateProducto(val).subscribe(res =>{
     alert("Editado correctamente");
    });
  }

}
