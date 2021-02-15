import { Component, OnInit, Input} from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-mostrar-detalles',
  templateUrl: './mostrar-detalles.component.html',
  styleUrls: ['./mostrar-detalles.component.css']
})
export class MostrarDetallesComponent implements OnInit {

 
  constructor(private service:SharedService) { }

  DetalleVentaList: any=[];

  

  ModalTitle: string;
  ActivateAddEditDepComp:boolean=false;
  detalle:any;

  ngOnInit(): void {
    this.refreshDetalleVentaList();
  }

  addClick(){
    this.detalle = {
      DetalleId: 0,
      DetalleVenta: 0,
      ProductoId: 0,
      Cantidad: 0,
      Precio: 0
    }
    this.ModalTitle = "Crear Detalle de la venta";
    this.ActivateAddEditDepComp=true;
  }



  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDetalleVentaList();
  }

  deleteClick(item){
    
    if(confirm('Estas seguro que desea eliminar el registro' + " " + item.Id + "?")){

      this.service.deleteDetalleVenta(item.Id).subscribe(data =>{
        alert("Registro Eliminado");
        this.refreshDetalleVentaList();
      } )
    }
  }


  refreshDetalleVentaList(){
    this.service.getDetalleVentaList().subscribe(data =>{
      this.DetalleVentaList = data;
    });
  }

}
