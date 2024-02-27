import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculadoraCientificaComponent } from './calculadora-cientifica/calculadora-cientifica.component';

export const routes: Routes = [
    {
        path:'inicio',
        component:InicioComponent
    },
    {
        path:'calculadora',
        component:CalculadoraComponent
    },
    {
        path:'calculadoraCientifica',
        component:CalculadoraCientificaComponent
    }
];
