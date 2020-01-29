import { TestBed } from '@angular/core/testing';

import { EventCourseTypeService } from './event-course-type.service';

describe('EventCourseTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventCourseTypeService = TestBed.get(EventCourseTypeService);
    expect(service).toBeTruthy();
  });
});
