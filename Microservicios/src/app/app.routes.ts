import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { TransaccionesComponent } from './Pages/transacciones/transacciones.component';
import { NgModule } from '@angular/core';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { CrearProductoComponent } from './Components/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './Components/editar-producto/editar-producto.component';
import { CrearTransaccionComponent } from './Components/crear-transaccion/crear-transaccion.component';
import { EditarTransaccionComponent } from './Components/editar-transaccion/editar-transaccion.component';
import { PresentacionComponent } from './Components/presentacion/presentacion.component';

export const routes: Routes = [
    {path: '',component: PresentacionComponent},
    {path: 'Inicio', component: InicioComponent, children: [
        {path: 'Productos', component: ProductosComponent},
        {path: 'Transacciones', component: TransaccionesComponent},
        {path: 'agregarProducto', component: CrearProductoComponent},
        {path: 'editarProducto', component: EditarProductoComponent},
        {path: 'agregarTransaccion', component: CrearTransaccionComponent},
        {path: 'editarTransaccion', component: EditarTransaccionComponent},
        
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};