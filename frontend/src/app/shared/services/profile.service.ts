import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public token: any;
  public endpoint: any = 'api/profile/';

  constructor(private commonService: CommonService) {
  }

  addProfile(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getProfiles() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getProfile(profileId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + profileId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editProfile(profileId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + profileId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteProfile(profileId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + profileId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
