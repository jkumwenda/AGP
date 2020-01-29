import { TestBed } from '@angular/core/testing';

import { EventCourseTypeCommunicationService } from './event-course-type-communication.service';

describe('EventCourseTypeCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventCourseTypeCommunicationService = TestBed.get(EventCourseTypeCommunicationService);
    expect(service).toBeTruthy();
  });
});
