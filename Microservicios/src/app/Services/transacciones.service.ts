import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaccion } from '../Models/transaccionesModel';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

   private api:string = 'http://localhost:5112/api/';
    constructor(private http:HttpClient) { }
  
  
    listarTransacciones() {
      return this.http.get(`${this.api}Transaccion/`);
    }
  
    crearTransaccion(transaccion:Transaccion) {
      return this.http.post(`${this.api}Transaccion`, transaccion);
    }
  
  
    buscarTransaccion(idTransaccion:String|Number){
      return this.http.get(`${this.api}Transaccion/transaccion?id=${idTransaccion}`);
    }
  
    actualizarTransaccion(idTransaccion:String|Number,transaccion:Transaccion){
      return this.http.put(`${this.api}Transaccion/editar?id=${idTransaccion}`,transaccion);
    }
  
    eliminarTransaccion(id:String|Number){
      return this.http.delete(`${this.api}Transaccion?id=${id}`)
    }
}
