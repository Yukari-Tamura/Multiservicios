import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { ComunicadorService } from '../../Services/comunicador.service';
import { Productos } from '../../Models/productosModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sweetalert} from '../../functions';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit {
  private mySubscription: Subscription = new Subscription;
  idProducto:any;
 productos:Productos = {
    nombre:'',
    descripcion: '',
    categoria: '',
    imagen:'',
    precio: 0,
    stock:0
  }

  constructor(private productosService:ProductosService, private comunicadorService:ComunicadorService, private router:Router) {

  }

  ngOnInit() { 
    this.mySubscription = this.comunicadorService.data$.subscribe(data => {
        if(data != null){
          this.idProducto = data;
          this.productosService.buscarProducto(data).subscribe((resp) => {
            this.productos = resp as any;
          })
        }
    })

   
  }


  editarProducto() {
    delete this.productos.id;

      if(this.productos.nombre === ''){
      Sweetalert.fnc("error", 'El nombre no puede estar vacio.')
      return;
     
    }

    if(this.productos.descripcion === ''){
      Sweetalert.fnc("error", 'La descripcion no puede estar vacio.')
      return;
      
    }

    if(this.productos.categoria === ''){
      Sweetalert.fnc("error", 'La categoria no puede estar vacio.')
      return;
     
    }

    if(this.productos.precio === 0){
      Sweetalert.fnc("error", 'Debe agregar un precio.')
      return;
    
    }

    if(this.productos.stock === 0){
      Sweetalert.fnc("error", 'Debe agregar un stock.')
      return;
    }

    this.productosService.actualizarProducto(this.idProducto,this.productos).subscribe((resp) => {
      Sweetalert.fnc("success", 'Producto Editado Exitosamente.')
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/Inicio/Productos']);
      })
    },
  (error) => {
    console.log('Error ', error)
  })
  }

}
