import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
    EmpleadosService
} from './service.index';


@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        EmpleadosService
    ],
    declarations: []
})
export class ServiceModule {}
