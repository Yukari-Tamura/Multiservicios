import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../Models/productosModel';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private api:string = 'http://localhost:5130/api/';
  constructor(private http:HttpClient) { }


  listarProductos() {
    return this.http.get(`${this.api}Productos/`);
  }

  crearProducto(producto:Productos) {
    return this.http.post(`${this.api}Productos`, producto);
  }


  buscarProducto(idProducto:String|Number){
    return this.http.get(`${this.api}Productos/producto?id=${idProducto}`);
  }

  actualizarProducto(idProducto:String|Number,producto:Productos){
    return this.http.put(`${this.api}Productos/editar?id=${idProducto}`,producto);
  }

  eliminarProducto(id:String|Number){
    return this.http.delete(`${this.api}Productos?id=${id}`)
  }
  
}
