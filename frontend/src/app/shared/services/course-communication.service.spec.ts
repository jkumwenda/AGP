import { TestBed } from '@angular/core/testing';

import { CourseCommunicationService } from './course-communication.service';

describe('CourseCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseCommunicationService = TestBed.get(CourseCommunicationService);
    expect(service).toBeTruthy();
  });
});
