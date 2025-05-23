import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaccion } from '../../Models/transaccionesModel';
import { TransaccionesService } from '../../Services/transacciones.service';
import { ProductosService } from '../../Services/productos.service';
import { Productos } from '../../Models/productosModel';
import { Router } from '@angular/router';
import { Sweetalert} from '../../functions';

@Component({
  selector: 'app-crear-transaccion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-transaccion.component.html',
  styleUrl: './crear-transaccion.component.css'
})
export class CrearTransaccionComponent {
   productos!:Productos[];
   idProducto:any;
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


    constructor(private transaccionesService:TransaccionesService, private productosService:ProductosService, private router:Router) {

    }


    ngOnInit(){
      this.cargarProductos();
      
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


    agregarTransaccion(){

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

      if(this.transaccion.cantidad === 0){
        Sweetalert.fnc("error", 'La cantidad no puede ser menor o igual a cero.')
        return;
      }

      this.transaccionesService.crearTransaccion(this.transaccion).subscribe((resp) => {
        Sweetalert.fnc("success", 'Transaccion exitosa.')
  
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/Inicio/Transacciones']);
        })
      })


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
}
