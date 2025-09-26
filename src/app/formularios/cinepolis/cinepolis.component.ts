import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre:string="";
  cantidadCompradores:string="";
  cantidadBoletos:string="";
  descuentoR:number=0;
  descuentoTarjeta:number=0;
  resultado:number=0;
  mensaje:string="";


  descuento():void{

    if (parseInt(this.cantidadBoletos)<=(parseInt(this.cantidadCompradores)*7)) {
      if (parseInt(this.cantidadBoletos)==2) {
        this.resultado=(parseInt(this.cantidadBoletos)*12);
      }
      
      else if (parseInt(this.cantidadBoletos)>=3&&parseInt(this.cantidadBoletos)<=5) {
      this.descuentoR=(parseInt(this.cantidadBoletos)*12)*0.10;
      this.resultado=(parseInt(this.cantidadBoletos)*12)-this.descuentoR;
      }

      else if (parseInt(this.cantidadBoletos)>5) {
      this.descuentoR=(parseInt(this.cantidadBoletos)*12)*0.15;
      this.resultado=(parseInt(this.cantidadBoletos)*12)-this.descuentoR;
     }

    }
    else{
      alert("Solo se pueden hasta un maximo de 7 boletas por persona :D")
    }
    
  }

  TarjetaSi():void{
    this.descuentoTarjeta=this.resultado*0.1;
    this.resultado=this.resultado-this.descuentoTarjeta;
  }



}


