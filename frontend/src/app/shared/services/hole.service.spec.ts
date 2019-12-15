import { TestBed } from '@angular/core/testing';

import { HoleService } from './hole.service';

describe('HoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoleService = TestBed.get(HoleService);
    expect(service).toBeTruthy();
  });
});
