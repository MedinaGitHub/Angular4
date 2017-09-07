import { TestBed, inject } from '@angular/core/testing';

import { InformacionService } from './informacion.service';

describe('InformacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformacionService]
    });
  });

  it('should be created', inject([InformacionService], (service: InformacionService) => {
    expect(service).toBeTruthy();
  }));
});
