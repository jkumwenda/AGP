import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileRoleService {
  public token: any;
  public endpoint: any = 'api/profile_role/';

  constructor(private commonService: CommonService) { }

  getProfileRoles(profileId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + '?profile_id=' + profileId).then(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  addProfileRole(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  deleteProfileRole(profileRoleId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + profileRoleId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

}
