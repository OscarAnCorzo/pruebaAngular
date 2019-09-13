// Importar modulos del router
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Importar vistas
import {Inicio} from './vistaInicio/inicio';
import {Gym} from './vistaGym/gym';
import {Tienda} from './vistaTienda/tienda';

// Lista de rutas
const appRoutes: Routes = [
    {path: 'inicio', component: Inicio},
    {path: 'gym', component: Gym},
    {path: 'tienda', component: Tienda},
    {path: 'tienda/:nombreProducto', component: Tienda},
    {path: '**', component: Inicio}
];

// exportarel modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);