import { Cliente } from 'src/app/model/cliente';
import { ValidaCPF } from './validaCPF';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.services';

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
  cpfNaoEncontrado: boolean = false;
  ativaCartao: boolean = false;
  valorMinimo: number = 11;
  qtdDigitos!: number;

  cliente!: Cliente;

  constructor(private fb: FormBuilder, private service: ClienteService) { }

  public createForm () {
    this.form = this.fb.group({
      cpf: ['',
            [ Validators.required,
              Validators.maxLength(14),
              Validators.minLength(14),
              ValidaCPF.ValidaCpf
            ]
          ]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    const cpf = this.form.value.cpf;

    if (this.cpfNumRepetido(cpf)) {
      this.service.getClientePorCpf(cpf).subscribe(
          data => {
            this.cliente = data;
            this.dadosCliente(this.cliente);
          }
      );
    }
  }

  dadosCliente(data: any): void {
    this.cliente = data[0];
    this.ativaCartao = true;

    if (this.cliente === undefined) {
      this.cpfNaoEncontrado = true;
      this.ativaCartao = false;
    } else {
      this.cpfNaoEncontrado = false;
    }
  }

  validaQuantidade(event: any): void {
    if ((this.form.value.cpf.length < this.valorMinimo)){
      this.validaQtd = true;
      this.qtdDigitos = this.form.value.cpf.length;
    };
  }

  mostraCartoes(event: any) {
    const retorno = this.cpfNumRepetido(event.target.value);

    if (!retorno || event.target.value === '' || !this.cpfNaoEncontrado) {
      this.cliente = {} as Cliente;
      this.ativaCartao = false;
    }
  }

  mascaraCpf() {
    if(this.form.value.cpf.length === 3 || this.form.value.cpf.length === 7) {
      this.form.controls['cpf'].setValue(this.form.value.cpf += '.');
    } else if(this.form.value.cpf.length === 11) {
      this.form.controls['cpf'].setValue(this.form.value.cpf += '-');
    }
  }

  apenasNumeros(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  cpfNumRepetido(cpf: any) {

    if (
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
    ) {
      return false;
    } else {
      return true;
    }
  }

  get cpf() {
    return this.form.get('cpf')!;
  }

  ngOnInit(): void {
    this.createForm();
  }
}
