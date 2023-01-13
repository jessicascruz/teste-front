import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  form!: FormGroup;
  submitted: boolean = false;
  validaQtd: boolean = false;
  valorMinimo: number = 11;
  qtdDigitos!: number;
  cpfInvalido: boolean = false;

  constructor(private fb: FormBuilder) { }

  public createForm () {
    this.form = this.fb.group({
      cpf: ['',
            [ Validators.required,
              Validators.maxLength(11),
              Validators.minLength(11),
              this.validaCpf
            ]
          ]
    });
  }

  public onSubmit() {
    this.submitted = true;

    if (this.validaCpf(this.form.value.cpf)) {
        alert('entrou')
    } else {
      this.cpfInvalido = true;
      alert(this.cpfInvalido);
    }
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


  validaCpf(control: FormControl) {

    let cpf = control.value;

    if (typeof cpf !== 'string')
      return false;

    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/))
      return false;

    cpf = cpf.split('');

    const validator = cpf
        .filter((digit: any, index: number, array: string | any[]) => index >= array.length - 2 && digit)
        .map((el: number) => +el );

    const toValidate = (pop: number) => cpf
        .filter((digit: any, index: number, array: string | any[]) => index < array.length - pop && digit)
        .map((el: string | number) => +el);

    const rest = (count: number, pop: number) => (toValidate(pop)
        .reduce((soma: number, el: number, i: number) => soma + el * (count - i), 0) * 10) % 11 % 10
    return !(rest(10,2) !== validator[0] || rest(11,1) !== validator[1]);
}
}
