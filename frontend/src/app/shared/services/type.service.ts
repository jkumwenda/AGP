import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  public token: any;
  public endpoint: any = 'api/type/';

  constructor(private commonService: CommonService) {
  }

  addType(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getTypes() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getType(typeId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + typeId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editType(typeId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + typeId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteType(typeId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + typeId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
