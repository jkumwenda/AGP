import { TestBed } from '@angular/core/testing';

import { EventTypeService } from './event-type.service';

describe('EventTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventTypeService = TestBed.get(EventTypeService);
    expect(service).toBeTruthy();
  });
});
