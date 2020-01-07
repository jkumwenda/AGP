import { Injectable } from '@angular/core';
import { CommonService } from './common.service';


@Injectable({
  providedIn: "root"
})
export class UserProfileService {
  public token: any;
  public endpoint: any = "api/user_profile/";

  constructor(private commonService: CommonService) {}

  getUserProfiles() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }
  getProfile(profileId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + profileId + "/").then(
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
