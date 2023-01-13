import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-simple',
  templateUrl: './reactive-simple.component.html',
  styleUrls: ['./reactive-simple.component.css']
})
export class ReactiveSimpleComponent implements OnInit {

  datosBasicos!: FormGroup;

  constructor(private readonly fb: FormBuilder){}

  ngOnInit(): void {
    this.datosBasicos = this.construirForm();
  }

  construirForm(){
    return this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      ciudad: ['', [Validators.required]]
    });
  }

  enviandoDatos(){
    this.datosBasicos.reset();
  }
}
