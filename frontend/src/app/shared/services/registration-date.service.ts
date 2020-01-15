import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class RegistrationDateService {
  public token: any;
  public endpoint: any = 'api/registration_date/';

  constructor(private commonService: CommonService) {
  }

  addRegistrationDate(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getRegistrationDates() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getRegistrationDate(registrationDateId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + registrationDateId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editRegistrationDate(registrationDateId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + registrationDateId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteRegistrationDate(registrationDateId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + registrationDateId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
