import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class PermissionCheckService {
  public token: any;
  public endpoint: any = 'api/profile/';

  constructor(private commonService: CommonService) {
  }

  permissionCheck(roleId: number, permissionCodes: string[]) {
    return new Promise((resolve, reject) => {
      this.commonService.post(`${this.endpoint}${roleId}/checkPermissions/`, { permissionCodes }).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }




}
