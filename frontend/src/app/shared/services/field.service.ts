import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class FieldService {
  public token: any;
  public endpoint: any = 'api/field/';

  constructor(
    private commonService: CommonService) {
  }

  addField(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getFields() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getField(fieldId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + fieldId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editField(fieldId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + fieldId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteField(fieldId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + fieldId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
