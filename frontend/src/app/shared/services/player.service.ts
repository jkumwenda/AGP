import { Injectable } from '@angular/core';
import { CommonService } from './common.service';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public token: any;
  public endpoint: any = 'api/player/';

  constructor(private commonService: CommonService) {}

  getPlayers() {
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

  getPlayer(profileId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + profileId + '/').then(
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
