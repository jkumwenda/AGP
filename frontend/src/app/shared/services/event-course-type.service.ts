import { Injectable } from '@angular/core';
import { CommonService } from './common.service';


@Injectable({
  providedIn: 'root',
})
export class EventCourseTypeService {
  public token: any;
  public endpoint: any = 'api/event_course_type/';

  constructor(private commonService: CommonService) {
  }

  addEventCourseType(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getEventCourseTypes() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }
  getGenderEventCourseTypes(genderId, eventId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(`${this.endpoint}?event=${eventId}&gender=${genderId}`).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getEventCourseType(eventCourseTypeId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + eventCourseTypeId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editEventCourseType(eventCourseTypeId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + eventCourseTypeId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteEventCourseType(eventCourseTypeId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + eventCourseTypeId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
