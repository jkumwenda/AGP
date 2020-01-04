import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class EventTypeService {
  public token: any;
  public endpoint: any = 'api/event_type/';

  constructor(
    private commonService: CommonService) {
  }

  addEventType(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getEventTypes() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getEventType(eventTypeId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + eventTypeId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editEventType(eventTypeId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + eventTypeId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteEventType(eventTypeId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + eventTypeId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
