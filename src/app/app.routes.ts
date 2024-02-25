import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

export const routes: Routes = [
    {
        path:'inicio',
        component:InicioComponent
    },
    {
        path:'calculadora',
        component:CalculadoraComponent
    }
];
