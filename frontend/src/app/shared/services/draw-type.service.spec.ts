import { TestBed } from '@angular/core/testing';

import { DrawTypeService } from './draw-type.service';

describe('DrawTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawTypeService = TestBed.get(DrawTypeService);
    expect(service).toBeTruthy();
  });
});
