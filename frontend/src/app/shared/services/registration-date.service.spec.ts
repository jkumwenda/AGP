import { TestBed } from '@angular/core/testing';

import { RegistrationDateService } from './registration-date.service';

describe('RegistrationDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationDateService = TestBed.get(RegistrationDateService);
    expect(service).toBeTruthy();
  });
});
