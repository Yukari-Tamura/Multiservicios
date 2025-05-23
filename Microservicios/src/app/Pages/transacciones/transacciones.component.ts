import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TransaccionesService } from '../../Services/transacciones.service';
import { ComunicadorService } from '../../Services/comunicador.service';
import { Transaccion } from '../../Models/transaccionesModel';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {Sweetalert} from '../../functions';
import { Productos } from '../../Models/productosModel';
import { ProductosService } from '../../Services/productos.service';
import { FilterPipe } from '../../filter.pipe';


@Component({
  selector: 'app-transacciones',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './transacciones.component.html',
  styleUrl: './transacciones.component.css'
})
export class TransaccionesComponent {
  transacciones!:Transaccion[];
  productos!:Productos[];
  filtro:string = '';

  //Variables para paginador
  paginaActual:number = 1;
  elementosPorPagina:number = 10;
  totalElementos:number = 0;
  totalPaginas:number = 0;
  botonesPagina:number[] = [];
  opcionesElementosPorPagina: number[] = [5,10,25,50]
  datosPaginaActual:Transaccion[] = [];


  constructor(private transaccionesService:TransaccionesService, private productosService:ProductosService, private comunicadorService:ComunicadorService, private router:Router){

  }

  ngOnInit() {
    this.cargarTransacciones();

    //Cargar Paginador
    this.totalElementos = this.transacciones.length;
    this.calcularPaginacion();
    this.cargarDatosPagina();
    this.cargarProductos();
  }


  cargarProductos(){
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

  cargarTransacciones(){
    this.transaccionesService.listarTransacciones().subscribe((resp) => {
      this.transacciones = resp as any;
      this.datosPaginaActual = resp as any;
    },
    (error) => {
      console.log('Error : ', error)
    },
    () => {
      console.log('Fin proceso')
      })
  }


  agregarTransaccion() {
    const currentUrl = 'agregarTransaccion';
  
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      })
  }


  editarTransaccion(id:any){
    this.comunicadorService.updateTransaction(id);     

    const currentUrl = 'editarTransaccion';
  
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      })
  }

  eliminarTransaccion(id:any){
    this.transaccionesService.eliminarTransaccion(id).subscribe((resp) => {
      this.cargarTransacciones();
      Sweetalert.fnc("success", 'Transaccion Eliminada Exitosamente.')
    },
   (error) => {
      console.log('Error : ', error)
    },
    () => {
      console.log('Fin proceso')
      })
  }

  nombreProducto(id:any){
    let nombre = this.productos?.filter(d => d.id === parseInt(id)) as any;
    if(nombre != undefined || nombre.length != 0){
    
      return nombre[0]?.nombre;
    }

      return 'No encontrado';
    
    
  }


  //Paginador
  calcularPaginacion(): void {
    this.totalPaginas = Math.ceil(this.totalElementos / this.elementosPorPagina);
    this.botonesPagina = Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }

  
  cargarDatosPagina(): void {
    const indiceInicio = (this.paginaActual - 1) * this.elementosPorPagina;
    const indiceFin = indiceInicio + this.elementosPorPagina;
    this.datosPaginaActual = this.transacciones.slice(indiceInicio, indiceFin);
  }

 
  irAPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
      this.cargarDatosPagina();
    }
  }

 
  siguientePagina(): void {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.cargarDatosPagina();
    }
  }

 
  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarDatosPagina();
    }
  }

  
  onElementosPorPaginaChange(event: Event): void {
    this.elementosPorPagina = Number((event.target as HTMLSelectElement).value);
    this.paginaActual = 1; 
    this.calcularPaginacion(); 
    this.cargarDatosPagina(); 
  }

}
