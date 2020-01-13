import { TestBed } from '@angular/core/testing';

import { EventFormatService } from './event-format.service';

describe('EventFormatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventFormatService = TestBed.get(EventFormatService);
    expect(service).toBeTruthy();
  });
});
