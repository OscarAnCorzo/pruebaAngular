import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';

// importar los componentes
import { AppComponent } from './app.component';
import {Producto} from './compProducto/producto';
import {BarraMenu} from './compBarraMenu/barraMenu';

//importar las vistas
import {Inicio} from './vistaInicio/inicio';
import {Gym} from './vistaGym/gym';
import {Tienda} from './vistaTienda/tienda';

@NgModule({
  declarations: [
    AppComponent,
    Producto,
    BarraMenu,
    Inicio,
    Gym,
    Tienda
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent, BarraMenu]
})
export class AppModule { }
