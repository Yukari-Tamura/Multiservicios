import { Component, OnInit } from '@angular/core';
import { Transaccion } from '../../Models/transaccionesModel';
import { Productos } from '../../Models/productosModel';
import { TransaccionesService } from '../../Services/transacciones.service';
import { ProductosService } from '../../Services/productos.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ComunicadorService } from '../../Services/comunicador.service';
import { Sweetalert} from '../../functions';

@Component({
  selector: 'app-editar-transaccion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-transaccion.component.html',
  styleUrl: './editar-transaccion.component.css'
})
export class EditarTransaccionComponent implements OnInit {
  private mySubscription: Subscription = new Subscription;
   productos!:Productos[];
     idProducto:any;
     idTransaccion:any;
       stockProducto:any;
    transaccion:Transaccion = {
        fecha: new Date(),
        tipoTransaccion: '',
        idProducto: 0,
        cantidad:0,
        precioUnitario:0,
        precioTotal:0,
        detalle:''
      }
  
  
      tipoTransaccion:[] = [{
        id: 1,
        nombre:'Compra'
      },
      {
        id:2,
        nombre: 'Ventas'
      }
    ] as any;
  
  
      constructor(private transaccionesService:TransaccionesService, private productosService:ProductosService, private router:Router, private comunicadorService:ComunicadorService) {
  
      }
  
  
      ngOnInit(){
        this.cargarProductos();
        this.mySubscription = this.comunicadorService.data$.subscribe(data => {
          if(data != null){
            this.idTransaccion = data;
            this.transaccionesService.buscarTransaccion(data).subscribe((resp) => {
              this.transaccion = resp as any;
            })
          }
        })
        
      }
  
      cargarProductos() {
          this.productosService.listarProductos().subscribe((res) => {
            this.productos = res as any;
          },
          (error) => {
            console.log('Error : ', error)
          },
          () => {
            console.log('Fin proceso')
            }
          )
        }
  

        cargarInformacionProducto(e:any){
      let id = e.target.value;

      this.productosService.buscarProducto(id).subscribe((resp) => {
        let datos = [] as any;
        datos = resp;
        this.transaccion.precioUnitario = datos.precio;
        this.stockProducto = datos.stock;
      })
    }


    calcularTotal(e:any){
      const cantidad = e.target.value;
      this.transaccion.precioTotal = cantidad * parseFloat(this.transaccion.precioUnitario as any);
    }

    editarTransaccion(){
      delete this.transaccion.id;
      //Validaciones
      //Validaciones
      if(this.transaccion.tipoTransaccion === ''){
       Sweetalert.fnc("error", 'Seléccione tipo de transacción.')
       return;
      }

      if(this.transaccion.idProducto === 0){
       Sweetalert.fnc("error", 'Seléccione un producto.')
       return;
      }

      if(this.transaccion.detalle === ''){
        Sweetalert.fnc("error", 'Agregue un detalle a la transacción.')
        return;
      }

      //Validaciones complejas
      if(this.transaccion.cantidad as any > this.stockProducto && this.transaccion.tipoTransaccion === 'Ventas'){
        Sweetalert.fnc("error", 'La cantidad ha vender no puede exceder el total.')
        return;
      }


      this.transaccionesService.actualizarTransaccion(this.idTransaccion,this.transaccion).subscribe((resp) => {
         Sweetalert.fnc("success", 'Transacción Exitosa.')
       
  
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/Inicio/Transacciones']);
        })
      })


    }

  
}
