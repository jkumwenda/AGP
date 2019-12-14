import { Injectable } from '@angular/core';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public token: any;
  public endpoint: any = 'api/user/';

  constructor(private commonService: CommonService) {
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getUser(userId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + userId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getUserByID(userId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + '?user_id=' + userId).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editUser(userId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + userId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteUser(userId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + userId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
