import { Injectable, Output, output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComunicadorService {

  private intercomunicador = new BehaviorSubject<any>(null);

  data$ = this.intercomunicador.asObservable();

  //Comunicador para productos
  updateDate(id:any){
    this.intercomunicador.next(id);
  }

  //Comunicador para transacciones
  updateTransaction(id:any){
    this.intercomunicador.next(id);
  }

  search(data:any){
    this.intercomunicador.next(this.search);
  }




  constructor() { }
}
