import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EmpleadosService } from '../../services/service.index';

import * as swal from 'sweetalert';

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html"
})
export class EmployeesComponent implements OnInit {
  form: FormGroup;

  constructor(
    public _empleadosService: EmpleadosService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      fecha_nan: new FormControl(null, [Validators.required]),
      domicilio: new FormControl(null, Validators.required)
    });
  }

  registrarEmpleado() {
    console.log(this.form.value);
  }
}
