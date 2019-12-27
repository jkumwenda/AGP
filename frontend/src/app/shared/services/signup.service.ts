import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  public token: any;
  public endpoint: any = 'api/signup/';

  constructor(private commonService: CommonService) {
  }

  signup(data) {
    return new Promise((resolve, reject) => {
      this.commonService.postNoAuth(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }
}
