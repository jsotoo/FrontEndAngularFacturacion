import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIurl= "http://localhost:59608/api/v1";


constructor(private http:HttpClient) { }

//PRODUCTO

getProductoList():Observable<any[]>{
  return this.http.get<any>(this.APIurl + "/productos");
}

addProducto(val:any){
  return this.http.post<any>(this.APIurl + "/productos/", val)
}

updateProducto(val:any){
  return this.http.put(this.APIurl + "/productos/", val)
}


deleteProducto(val:any){
  return this.http.delete(this.APIurl + "/productos/" + val)
}

//CLIENTE
getClienteList():Observable<any[]>{
  return this.http.get<any>(this.APIurl + "/clientes");
}
addCliente(val:any){
  return this.http.post<any>(this.APIurl + "/clientes/", val)
}
updateCliente(val:any){
  return this.http.put<any>(this.APIurl + "/clientes/", val)
}

deleteCliente(val:any){
  return this.http.delete<any>(this.APIurl + "/clientes/" + val)
}

//DETALLE VENTA

getDetalleVentaList():Observable<any[]>{
  return this.http.get<any>(this.APIurl + "/detalleventas");
}
addDetalleVenta(val:any){
  return this.http.post<any>(this.APIurl + "/detalleventas/", val)
}
updateDetalleVenta(val:any){
  return this.http.put(this.APIurl + "/detalleventas/", val)
}
deleteDetalleVenta(val:any){
  return this.http.delete(this.APIurl + "/detalleventas/" + val)
}



}
