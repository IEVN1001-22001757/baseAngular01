import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Adrian Fernandez';

  duplicarNumero(valor:number):number{
    return valor*2;
  }

  pelicula={
    titulo:"El padrino",
    anio:1972,
    genero:"Crimen/Drama"
  }
}

