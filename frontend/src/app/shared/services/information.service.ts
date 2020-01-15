import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  public token: any;
  public endpoint: any = 'api/information/';

  constructor(private commonService: CommonService) {
  }

  addInformation(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getInformations() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getInformation(informationId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + informationId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editInformation(informationId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + informationId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteInformation(informationId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + informationId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
