import { TestBed } from '@angular/core/testing';

import { AnnuncioService } from './annuncio.service';

describe('AnnuncioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnuncioService = TestBed.get(AnnuncioService);
    expect(service).toBeTruthy();
  });
});
