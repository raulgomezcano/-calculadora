import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  numero1:number=0
  numero2: number=0
  resultado: number=0
  constructor(){}
  ngOnInit(): void{
  }
  sumar(){
    this.resultado=this.numero1+this.numero2;
  }
  restar(){
    this.resultado=this.numero1-this.numero2;
  }
  dividir(){
    this.resultado=this.numero1/this.numero2;
  }
  multiplicar(){
    this.resultado=this.numero1*this.numero2;
  }
}
