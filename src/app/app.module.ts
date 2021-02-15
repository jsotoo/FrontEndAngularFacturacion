import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { MostrarProductosComponent } from './Producto/mostrar-productos/mostrar-productos.component';
import { CrearEditarProductoComponent } from './Producto/crear-editar-producto/crear-editar-producto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MostrarClientesComponent } from './Cliente/mostrar-clientes/mostrar-clientes.component';
import { CrearEditarClienteComponent } from './Cliente/crear-editar-cliente/crear-editar-cliente.component';
import { SharedService} from './shared.service';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule, Router} from '@angular/router';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { MostrarDetallesComponent } from './detalle-Venta/mostrar-detalles/mostrar-detalles.component';
import { CrearEditarDetallesComponent } from './detalle-Venta/crear-editar-detalles/crear-editar-detalles.component';






@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    MostrarProductosComponent,
    CrearEditarProductoComponent,
    ClienteComponent,
    MostrarClientesComponent,
    CrearEditarClienteComponent,
    DetalleVentaComponent,
    MostrarDetallesComponent,
    CrearEditarDetallesComponent
 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'producto',component: ProductoComponent},
      {path:'cliente',component: ClienteComponent},
      {path:'DetalleVenta', component: DetalleVentaComponent}
    ]),
    HttpClientModule
   

  ],
  exports: [RouterModule],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
