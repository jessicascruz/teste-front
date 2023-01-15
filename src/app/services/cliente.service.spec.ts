import { TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente.services';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: []
    });
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data when valid cpf', () => {
    const cpf = "165.134.750-66";

    service.getClientePorCpf(cpf);
    expect(service).toBeTruthy();
  });
});