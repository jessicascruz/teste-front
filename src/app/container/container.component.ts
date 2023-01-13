import { ValidaCPF } from './validaCPF';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  form!: FormGroup;
  submitted: boolean = false;
  validaQtd: boolean = false;
  cpfInvalido: boolean = false;
  valorMinimo: number = 11;
  qtdDigitos!: number;

  constructor(private fb: FormBuilder) { }

  public createForm () {
    this.form = this.fb.group({
      cpf: ['',
            [ Validators.required,
              Validators.maxLength(11),
              Validators.minLength(11),
              ValidaCPF.ValidaCpf
            ]
          ]
    });
  }

  public onSubmit() {
    this.submitted = true;

  }

  validaQuantidade(event: any) {
    if (this.form.value.cpf.length < this.valorMinimo){
      this.validaQtd = true;
      this.qtdDigitos = this.form.value.cpf.length;
    };
  }

  apenasNumeros(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  get cpf() {
    return this.form.get('cpf')!;
  }


  ngOnInit(): void {
    this.createForm();
  }


}
