import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
   nombre="";
   apellido="";
   numero1="";
   numero2="";
   resultado:number=0;
   signo="";
   numero3="";
   mostrar="";

   sumar(){
     this.resultado=parseFloat(this.numero1)+parseFloat(this.numero2);
     this.signo="+";
     this.mostrar=this.numero1+this.signo+this.numero2+"="+this.resultado;
   } 

   restar(){
    this.resultado=parseFloat(this.numero1)-parseFloat(this.numero2);
    this.signo="-";
    this.mostrar=this.numero1+this.signo+this.numero2+"="+this.resultado;
  } 

  multiplicar(){
    this.resultado=parseFloat(this.numero1)*parseFloat(this.numero2);
    this.signo="x";
    this.mostrar=this.numero1+this.signo+this.numero2+"="+this.resultado;
  } 

  dividir(){
    this.resultado=parseFloat(this.numero1)/parseFloat(this.numero2);
    this.signo="/";
    this.mostrar=this.numero1+this.signo+this.numero2+"="+this.resultado;
  } 


}
