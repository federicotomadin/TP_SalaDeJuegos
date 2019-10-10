import { TestBed } from '@angular/core/testing';

import { ServicioGamesService } from './servicio-games.service';

describe('ServicioGamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioGamesService = TestBed.get(ServicioGamesService);
    expect(service).toBeTruthy();
  });
});
