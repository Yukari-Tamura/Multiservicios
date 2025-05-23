import { Component } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { Productos } from '../../Models/productosModel';
import { FilterPipe } from '../../filter.pipe';
import { CommonModule } from '@angular/common';
import { ComunicadorService } from '../../Services/comunicador.service';
import { Router } from '@angular/router';
import {Sweetalert} from '../../functions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FilterPipe, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos!:Productos[];
  filtro:string = '';

  //Variables para paginador
  paginaActual:number = 1;
  elementosPorPagina:number = 10;
  totalElementos:number = 0;
  totalPaginas:number = 0;
  botonesPagina:number[] = [];
  opcionesElementosPorPagina: number[] = [5,10,25,50]
  datosPaginaActual:Productos[] = [];

  constructor(private productosService:ProductosService, private comunicadorService:ComunicadorService, private router:Router){

  }


  ngOnInit(){
    this.cargarProductos(); 
  }


  cargarProductos() {
    this.productosService.listarProductos().subscribe((res) => {
      this.productos = res as any;
      this.datosPaginaActual = res as any;
    },
    (error) => {
      console.log('Error : ', error)
    },
    () => {
      console.log('Fin proceso')
      }
    )
  }

  eliminarProducto(id:any){
    this.productosService.eliminarProducto(id).subscribe((res) => {
      this.cargarProductos();
      Sweetalert.fnc("success", 'Producto Eliminado Exitosamente.')

    },
    (error) => {
      console.log('Error : ', error)
    },
    () => {
      console.log('Fin proceso')
      }
    )
  }


  agregarProducto(){
    const currentUrl = 'Inicio/agregarProducto';
  
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      })
  }

  editarInformacion(id:any){
    this.comunicadorService.updateDate(id);

    const currentUrl = 'Inicio/editarProducto';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      })
  }


  //Paginador
  calcularPaginacion(): void {
    this.totalPaginas = Math.ceil(this.totalElementos / this.elementosPorPagina);
    this.botonesPagina = Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }

  
  cargarDatosPagina(): void {
    const indiceInicio = (this.paginaActual - 1) * this.elementosPorPagina;
    const indiceFin = indiceInicio + this.elementosPorPagina;
    this.datosPaginaActual = this.productos.slice(indiceInicio, indiceFin);
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
