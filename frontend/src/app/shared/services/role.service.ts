import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  public token: any;
  public endpoint: any = 'api/role/';

  constructor(private commonService: CommonService) {
  }

  addRole(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getRoles() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getRole(roleId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + roleId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editRole(roleId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + roleId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteRole(roleId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + roleId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
