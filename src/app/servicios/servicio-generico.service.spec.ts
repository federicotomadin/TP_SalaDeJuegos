import { TestBed } from '@angular/core/testing';

import { ServicioGenericoService } from './servicio-generico.service';

describe('ServicioGenericoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioGenericoService = TestBed.get(ServicioGenericoService);
    expect(service).toBeTruthy();
  });
});
