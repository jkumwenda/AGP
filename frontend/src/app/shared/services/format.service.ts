import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class FormatService {
  public token: any;
  public endpoint: any = 'api/format/';

  constructor(
    private commonService: CommonService) {
  }

  addFormat(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getFormats() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getFormat(formatId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + formatId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editFormat(formatId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + formatId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteFormat(formatId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + formatId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
