import { Component, OnInit, Input } from '@angular/core';
//import {MostrarProductosComponent} from '../../producto/mostrar-productos/mostrar-productos.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { SharedService } from 'src/app/shared.service';
//import {MostrarClientesComponent} from '../mostrar-clientes/mostrar-clientes.component'

@Component({
  selector: 'app-crear-editar-cliente',
  templateUrl: './crear-editar-cliente.component.html',
  styleUrls: ['./crear-editar-cliente.component.css']
})
export class CrearEditarClienteComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cliente:any;
  ClienteId:string;
  Nombres: string;
  Apellidos: string;
  Direccion: string;
  Telefono: string;
  Email:string;

  ngOnInit(): void {
    this.ClienteId = this.cliente.ProductoId;
    this.Nombres = this.cliente.Nombres;
    this.Apellidos  = this.cliente.Apellidos;
    this.Direccion  = this.cliente.Direccion;
    this.Telefono  = this.cliente.Telefono;
    this.Email  = this.cliente.Email;
  }

  crearCliente(){
    var val = {
     
      Nombres: this.Nombres,
      Apellidos: this.Apellidos,
      Direccion: this.Direccion,
      Telefono: this.Telefono,
      Email: this.Email
    };
    this.service.addCliente(val).subscribe(res =>{
     alert("Se ha registrado correctamente");
    });
  }

  editarCliente(){
    var val = {
      Nombres: this.Nombres,
      Apellidos: this.Apellidos,
      Direccion: this.Direccion,
      Telefono: this.Telefono,
      Email: this.Email
    };
    this.service.updateCliente(val).subscribe(res =>{
     alert("Editado correctamente");
    });
  }

}
