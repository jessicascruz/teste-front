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
              Validators.maxLength(11),
              Validators.minLength(11),
              ValidaCPF.ValidaCpf
            ]
          ]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    const cpf = this.form.value.cpf;

    this.service.getClientePorCpf(cpf).subscribe(
        data => {
          this.cliente = data;
          this.dadosCliente(this.cliente);
        }
    );
  }

  dadosCliente(data: any): void {
    this.cliente = data[0];
    this.ativaCartao = true;

    if (this.cliente === undefined)
      this.cpfNaoEncontrado = true;
    else
      this.cpfNaoEncontrado = false;

    console.log(this.cliente);
  }


  validaQuantidade(event: any): void {
    if (this.form.value.cpf.length < this.valorMinimo){
      this.validaQtd = true;
      this.qtdDigitos = this.form.value.cpf.length;
    };

    this.mostraCartoes();
  }

  mostraCartoes() {
    if (this.form.value.cpf.length === 0) {
      this.cliente = {} as Cliente;
      this.ativaCartao = false;
    }
  }

  apenasNumeros(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;

    this.mostraCartoes();

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
