import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-calculadora-cientifica',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora-cientifica.component.html',
  styleUrl: './calculadora-cientifica.component.css'
})
export class CalculadoraCientificaComponent {
  numero1="";
  numero2="";
  resultado:number=0;
  factor:number=1;
  num:number=0;
  i:number=1;
  guardar:number=0;
  prueba:number=0;
  grados="grados";
  botonSeno="Sin";
  botonCos="Cos";
  botonTan="Tan";
  bandera=true;
  bandera2:number=1;

  grado(){
    this.grados="grados";
  }

  radianes(){
    this.grados="radianes";
  }

  factorEXP(){
    this.numero1=this.numero1+"E";
  }

  porcentaje(){
    this.numero1=this.numero1+"%";
  }

  limpiar(){
    this.resultado=0;
    this.numero1="";
  }

  factorial(){
    this.num=parseFloat(this.numero1);
    if(this.num!=0){
      do{
        this.num=this.num*this.factor;
        this.factor=parseFloat(this.numero1)-this.i;
        this.i=this.i+1;
      }while(this.factor>0);
    this.resultado=this.num;
    }else{
      this.resultado=1;
    }
  }

  raizCuadrada(){
    //this.resultado=Math.sqrt(parseFloat(this.numero1));
    this.numero1=this.numero1+"√(";
  }

  logaritmoNatural10(){
    //this.resultado=Math.log10(parseFloat(this.numero1));
    this.numero1=this.numero1+"log(";
  }

  logaritmoNatural(){
    //this.resultado=Math.log(parseFloat(this.numero1));
    this.numero1=this.numero1+"ln(";
  }

  seno(){
    //this.resultado=Math.sin(parseFloat(this.numero1));
    if(this.bandera2==1){
      this.numero1=this.numero1+"sin(";
    }else{
      this.numero1=this.numero1+"asin(";
    }
    
  }

  coseno(){
    //this.resultado=Math.cos(parseFloat(this.numero1));
    if(this.bandera2==1){
      this.numero1=this.numero1+"cos(";
    }else{
      this.numero1=this.numero1+"acos(";
    }
  }

  tangente(){
    //this.resultado=Math.tan(parseFloat(this.numero1));
    if(this.bandera2==1){
      this.numero1=this.numero1+"tan(";
    }else{
      this.numero1=this.numero1+"atan(";
    }
  }

  concatenar9(){
    this.numero1=this.numero1+9;
  }

  concatenar8(){
    this.numero1=this.numero1+8;
  }

 concatenar7(){
   this.numero1=this.numero1+7;
 }

 concatenar6(){
  this.numero1=this.numero1+6;
}

concatenar5(){
  this.numero1=this.numero1+5;
}

concatenar4(){
  this.numero1=this.numero1+4;
}

concatenar3(){
  this.numero1=this.numero1+3;
}

concatenar2(){
  this.numero1=this.numero1+2;
}

concatenar1(){
  this.numero1=this.numero1+1;
}

concatenar0(){
  this.numero1=this.numero1+0;
}

concatenarPunto(){
  this.numero1=this.numero1+".";
}

numeroPi(){
  this.numero1=this.numero1+"π";
}

numeroE(){
  this.numero1=this.numero1+"2.718281828";
}

parentesisIzquierdo(){
  this.numero1=this.numero1+"(";
}

parentesisDerecho(){
  this.numero1=this.numero1+")";
}

suma(){
  this.numero1=this.numero1+"+";
}

resta(){
  this.numero1=this.numero1+"-";
}

multiplicacion(){
  this.numero1=this.numero1+"*";
}

division(){
  this.numero1=this.numero1+"/";
}

guardarResultadoAnterior(){
  this.numero1=this.numero1+this.numero2;
}

resultadoExpresion(){
  if(this.grados=="grados"){
    if(this.bandera2==1){
      this.resultado=eval(((((((((this.numero1.replace("E",'*10**')).replace("log(", 'Math.log10(')).replace("^", '**')).replace("π",'Math.PI')).replace("%",'/100')).replace("√(",'Math.sqrt(').replace("cos(",'Math.cos((Math.PI/180)*')).replace("tan(",'Math.tan((Math.PI/180)*')).replace("sin(",'Math.sin((Math.PI/180)*')).replace("ln(",'Math.log('));
    }else{
      this.resultado=eval(((((((((this.numero1.replace("E",'*10**')).replace("log(", 'Math.log10(')).replace("^", '**')).replace("π",'Math.PI')).replace("%",'/100')).replace("√(",'Math.sqrt(').replace("acos(",'Math.acos((Math.PI/180)*')).replace("atan(",'Math.atan((Math.PI/180)*')).replace("asin(",'Math.asin((Math.PI/180)*')).replace("ln(",'Math.log('));
    }
  }else{
    if(this.bandera2==1){
       this.resultado=eval(((((((((this.numero1.replace("E",'*10**')).replace("log(", 'Math.log10(')).replace("^", '**')).replace("π",'Math.PI')).replace("%",'/100')).replace("√(",'Math.sqrt(').replace("sin(",'Math.sin(')).replace("cos(",'Math.cos(')).replace("tan(",'Math.tan(')).replace("ln(",'Math.log('));
    }else{
      this.resultado=eval(((((((((this.numero1.replace("E",'*10**')).replace("log(", 'Math.log10(')).replace("^", '**')).replace("π",'Math.PI')).replace("%",'/100')).replace("√(",'Math.sqrt(').replace("asin(",'Math.asin(')).replace("acos(",'Math.acos(')).replace("atan(",'Math.atan(')).replace("ln(",'Math.log('));    
    }       
  }
  this.numero2=(this.resultado.toString());
}

potencia(){
  this.numero1=(this.numero1+"^");
}

inversas(){
  this.bandera=!this.bandera;
  if(this.bandera){
    this.botonSeno="Sin";
    this.botonCos="Cos";
    this.botonTan="Tan";
    this.bandera2=1;
  }else{
    this.botonSeno="asin";
    this.botonCos="acos";
    this.botonTan="atan";
    this.bandera2=2;
    this.grados="radianes";
  }

}








}
