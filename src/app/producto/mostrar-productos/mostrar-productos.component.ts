import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
//import {CrearEditarProductoComponent} from '../crear-editar-producto/crear-editar-producto.component'
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
//import { Alert } from 'selenium-webdriver';
import {ProductoComponent} from '../../producto/producto.component';

@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css']
})
export class MostrarProductosComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductosList: any=[];

  ModalTitle: string;
  ActivateAddEditDepComp:boolean=false;
  producto:any;

  ngOnInit(): void {
    this.refreshProductosList();
  }

  addClick(){
    this.producto = {
      ProductoId: 0,
      Nombre: "",
      Precio: 0,
      stock: 0
    }
    this.ModalTitle = "Crear Producto";
    this.ActivateAddEditDepComp=true;
  }

  editClick(item){
    this.producto = item;
    this.ModalTitle = "Editar Producto";
    this.ActivateAddEditDepComp=true;
  }


  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshProductosList();
  }

  deleteClick(item){
    
    if(confirm('Estas seguro que desea eliminar el registro' + " " + item.Id + "?")){

      this.service.deleteProducto(item.Id).subscribe(data =>{
        alert("Registro Eliminado");
        this.refreshProductosList();
      } )
    }
  }


  refreshProductosList(){
    this.service.getProductoList().subscribe(data =>{
      this.ProductosList = data;
    });
  }

}
