import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  public token: any;
  public endpoint: any = 'api/club/';

  constructor(
    private commonService: CommonService) {
  }

  addClub(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getClubs() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getClub(clubId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + clubId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editClub(clubId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + clubId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteClub(clubId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + clubId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
