import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-home',
  templateUrl: './componente-home.component.html',
  styleUrl: './componente-home.component.css'
})
export class ComponenteHomeComponent {
  nombreCurso = "Desarrollo Avanzada de Aplicaciones II";
  urlImagen = "https://www.greatplacetowork.com.pe/images/certification/2021/idat/logo-2.png";
  
  nuevoValorCurso():void{
    this.nombreCurso= "Desarrollo de Aplicaciones web"
  }

}
