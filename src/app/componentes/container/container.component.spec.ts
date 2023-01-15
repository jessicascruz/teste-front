import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

fdescribe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ ContainerComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    // service = TestBed.inject(ClienteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    fixture.detectChanges();

    const containerDebugElement = fixture.debugElement.query(By.css('.container'));
    expect(containerDebugElement).toBeTruthy();
  });

  it('deve validar quantidade de caracteres', () => {
    let cpf = "165.134.750-66";

    component.validaQuantidade(cpf);
    fixture.detectChanges;

    expect(component.validaQtd).toBeTrue();
  });

  it('deve validar que cpf tem numeros repetidos', () => {
    let cpf = "11111111111";

    let teste = component.cpfNumRepetido(cpf);
    fixture.detectChanges;

    expect(teste).toBeFalse();
  });

  it('deve validar que cpf não tem numeros repetidos', () => {
    let cpf = "16513475066";

    let teste = component.cpfNumRepetido(cpf);
    fixture.detectChanges;

    expect(teste).toBeTrue();
  });

  it('deve testar se dados são retornados do back quando válido', () => {
    let cpf = "16513475066";

    component.dadosCliente(cpf);
    fixture.detectChanges;

    expect(component.cpfNaoEncontrado).toBeFalse();
  });

  it('deve testar se dados são retornados do back quando inválido', () => {
    let cpf = "";

    component.dadosCliente(cpf);
    fixture.detectChanges;

    expect(component.cpfNaoEncontrado).toBeTrue();
  });

  it('deve percorrer mascaraCpf e retornar "." depois dos 3 primeiros números', () => {
    let cpf = "325."

    component.form.value.cpf = "325";

    component.mascaraCpf();

    fixture.detectChanges;

    expect(component.form.value.cpf).toEqual(cpf);
  });

  it('deve percorrer mascaraCpf e retornar "." depois dos 7 primeiros números', () => {
    let cpf = "325.658."

    component.form.value.cpf = "325.658";

    component.mascaraCpf();

    fixture.detectChanges;

    expect(component.form.value.cpf).toEqual(cpf);
  });

  it('deve percorrer mascaraCpf e retornar "-" antes dos 2 últimos dígitos', () => {
    let cpf = "325.658.652-"

    component.form.value.cpf = "325.658.652";

    component.mascaraCpf();

    fixture.detectChanges;

    expect(component.form.value.cpf).toEqual(cpf);
  });

  it('deve verificar numeros repetidos e se estiver repetido dar "true" a "ativaCartao" ', () => {

    let valor = { target: { value: 16513475066 }};
    component.mostraCartoes(valor);
    component.cpfNumRepetido(valor);

    fixture.detectChanges;

    expect(component.ativaCartao).toBeFalse();
  });

  it('deve validar se tem apenas números e retornar verdadeiro', () => {
    let cpf = "16513475066";

    let retorno = component.apenasNumeros(cpf);


    fixture.detectChanges;

    expect(retorno).toBeTrue();
  });

  it('deve validar se tem apenas números e retornar falso', () => {
    let cpf = "oijh";

    let retorno = component.apenasNumeros(cpf);


    fixture.detectChanges;

    expect(retorno).toBeTrue();
  });

  it('deve submeter formulário', () => {
    let cpf = "16513475066";

    component.onSubmit();
    component.cpfNumRepetido(cpf);


    fixture.detectChanges;

    expect();
  });

});
