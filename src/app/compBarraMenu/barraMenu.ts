import {Component} from '@angular/core';

@Component({
    selector: 'barra-menu',
    templateUrl: './barraMenu.html'
})

export class BarraMenu{
    public estado: boolean;

    constructor(){
        this.estado = true;
    }
}