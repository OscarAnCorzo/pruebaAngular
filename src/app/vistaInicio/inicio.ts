import {Component} from '@angular/core';

@Component({
    selector: 'vista-inicio',
    templateUrl: './inicio.html'
})

export class Inicio{
    public estado: boolean;

    constructor(){
        this.estado = true;
    }
}