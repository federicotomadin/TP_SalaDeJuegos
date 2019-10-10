import { TestBed } from '@angular/core/testing';

import { ServicioGameService } from './servicio-game.service';

describe('ServicioGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioGameService = TestBed.get(ServicioGameService);
    expect(service).toBeTruthy();
  });
});
