//resistencia.component.ts

import { Component, OnInit } from '@angular/core';
import { CalculadoraResistencia} from './operacionesresistencia';

@Component({
  selector: 'app-resistencia',
  standalone: false,
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent{
  public calculadora: CalculadoraResistencia = new CalculadoraResistencia();

  public valores = this.calculadora.getValores();
  public multiplicadores = this.calculadora.getMultiplicadores();
  public tolerancias = this.calculadora.getTolerancias();

  /* public calcuValor(): void {
    this.calculadora.calcularResistencia();
  } */

}
