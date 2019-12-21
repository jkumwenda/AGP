import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class DrawTypeService {
  public token: any;
  public endpoint: any = 'api/draw_type/';

  constructor(private commonService: CommonService) {
  }

  addDrawType(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getDrawTypes() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getDrawType(draw_typeId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + draw_typeId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editDrawType(draw_typeId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + draw_typeId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteDrawType(draw_typeId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + draw_typeId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
