import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-crear-editar-detalles',
  templateUrl: './crear-editar-detalles.component.html',
  styleUrls: ['./crear-editar-detalles.component.css']
})
export class CrearEditarDetallesComponent implements OnInit {

 
  constructor(private service:SharedService) { }

  @Input() detalle:any;
  detalleId:string;
  detalleVenta:string;
  ProductoId: string;
  Cantidad: string;
  Precio: string;


  ngOnInit(): void {
    this.detalleId = this.detalle.detalleId;
    this.detalleVenta = this.detalle.detalleVenta;
    this.ProductoId  = this.detalle.ProductoId;
    this.Cantidad  = this.detalle.Cantidad;
    this.Precio  = this.detalle.Precio;
   
  }

  crearDetalleVenta(){
    var val = {
     
      detalleId: this.detalleId,
      detalleVenta: this.detalleVenta,
      ProductoId: this.ProductoId,
      Cantidad: this.Cantidad,
      Precio: this.Precio
    };
    this.service.addDetalleVenta(val).subscribe(res =>{
     alert("Se ha registrado correctamente");
    });
  }

  
}