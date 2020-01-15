import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class EventFormatService {
  public token: any;
  public endpoint: any = 'api/event_format/';

  constructor(private commonService: CommonService) {
  }

  addEventFormat(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getEventFormats() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getEventFormat(eventFormatId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + eventFormatId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editEventFormat(eventFormatId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + eventFormatId + '/', data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteEventFormat(eventFormatId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + eventFormatId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
