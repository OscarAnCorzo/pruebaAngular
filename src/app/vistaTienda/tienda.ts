import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'vista-tienda',
    templateUrl: './tienda.html'
})

export class Tienda{
    public estado: boolean;
    public nombreProducto: string;

    constructor(private _route: ActivatedRoute, private _router: Router){
        this.estado = true;
    }

    ngOnInit(){
        this._route.params.subscribe((params: Params) => { // en params está el parametro de la url
            this.nombreProducto = params.nombreProducto; // el nombreProducto de aqui es el q se puso en el path del routing
        });
    }
}