import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class HoleService {
  public token: any;
  public endpoint: any = 'api/hole/';

  constructor(
    private commonService: CommonService) {
  }

  addHole(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getHoles() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getHole(holeId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + holeId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editHole(holeId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + holeId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteHole(holeId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + holeId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
