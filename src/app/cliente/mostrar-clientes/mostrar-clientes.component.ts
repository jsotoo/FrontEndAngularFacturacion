import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Alert } from 'selenium-webdriver';
//import {CrearEditarClienteComponent} from '../crear-editar-cliente/crear-editar-cliente.component';
//import {MostrarProductosComponent} from '../../producto/mostrar-productos/mostrar-productos.component';

@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
  styleUrls: ['./mostrar-clientes.component.css']
})
export class MostrarClientesComponent implements OnInit {

 
  constructor(private service:SharedService) { }

  ClientesList: any=[];

  

  ModalTitle: string;
  ActivateAddEditDepComp:boolean=false;
  cliente:any;

  ngOnInit(): void {
    this.refreshClientesList();
  }

  addClick(){
    this.cliente = {
      ClienteId: 0,
      Nombres: "",
      Apellidos: "",
      Direccion: "",
      Telefono: "",
      Email: "",
    }
    this.ModalTitle = "Crear Cliente";
    this.ActivateAddEditDepComp=true;
  }

  editClick(item){
    this.cliente = item;
    this.ModalTitle = "Editar Cliente";
    this.ActivateAddEditDepComp=true;
  }


  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshClientesList();
  }

  deleteClick(item){
    
    if(confirm('Estas seguro que desea eliminar el registro' + " " + item.Id + "?")){

      this.service.deleteCliente(item.Id).subscribe(data =>{
        alert("Registro Eliminado");
        this.refreshClientesList();
      } )
    }
  }


  refreshClientesList(){
    this.service.getClienteList().subscribe(data =>{
      this.ClientesList = data;
    });
  }

}
