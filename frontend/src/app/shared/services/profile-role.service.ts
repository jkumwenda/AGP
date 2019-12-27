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

}
