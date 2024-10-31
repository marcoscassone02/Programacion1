import { TestBed } from '@angular/core/testing';

import { LibrosadminService } from './librosadmin.service';

describe('LibrosadminService', () => {
  let service: LibrosadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
