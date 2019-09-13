import {Component} from '@angular/core';

@Component({
    selector: 'vista-gym',
    templateUrl: './gym.html'
})

export class Gym{
    public estado: boolean;

    constructor(){
        this.estado = true;
    }
}