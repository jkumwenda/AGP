import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class GenderService {
  public token: any;
  public endpoint: any = 'api/gender/';

  constructor(private commonService: CommonService) {
  }

  addGender(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getGenders() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getGender(genderId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + genderId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editGender(genderId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + genderId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteGender(genderId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + genderId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
