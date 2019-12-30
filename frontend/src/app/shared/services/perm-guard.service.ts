import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class PermGuardService {
  public endpoint: any = 'api/role_permission/';
  private profileId: any;

  constructor(
    private commonService: CommonService,
  ) { }

  getProfileRolePermission(permission, profileId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + '?permission=' + permission + '&profile_id=' + profileId).then((result) => {
        resolve(result);
      }, (error) => {
          reject(error);
      });
    });
  }
}
