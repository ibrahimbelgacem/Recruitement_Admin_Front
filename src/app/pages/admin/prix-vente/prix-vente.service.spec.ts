import { TestBed } from '@angular/core/testing';

import { PrixVenteService } from './prix-vente.service';

describe('PrixVenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrixVenteService = TestBed.get(PrixVenteService);
    expect(service).toBeTruthy();
  });
});
