import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  public token: any;
  public endpoint: any = 'api/permission/';

  constructor(private commonService: CommonService) {
  }

  addPermission(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }




  getPermissions() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getPermission(permissionId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + permissionId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editPermission(permissionId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + permissionId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deletePermission(permissionId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + permissionId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
