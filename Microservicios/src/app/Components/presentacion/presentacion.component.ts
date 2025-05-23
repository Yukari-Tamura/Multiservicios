import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent {

  constructor(private router:Router){

  }


  empezar(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/Inicio']);
    })
  }

}
