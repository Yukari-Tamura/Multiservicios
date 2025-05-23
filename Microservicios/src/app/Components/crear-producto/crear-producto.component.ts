import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { Productos } from '../../Models/productosModel';
import { ProductosService } from '../../Services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Sweetalert} from '../../functions';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {

  productos:Productos = {
    nombre:'',
    descripcion: '',
    categoria: '',
    imagen:'',
    precio: 0,
    stock:0
  }

  constructor(private productosService:ProductosService, private router:Router){
  }

  ngOnInit() {
    console.log('Iniciar Agregar')

  }

  agregarProducto() {
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

    this.productosService.crearProducto(this.productos).subscribe((resp) => {
      Sweetalert.fnc("success", 'Producto agregado exitosamente.')
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/Inicio/Productos']);
      })
    },
    (error) => {console.log('Error ', error)})
   

  }




}
