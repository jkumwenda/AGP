import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public token: any;
  public endpoint: any = 'api/game/';

  constructor(private commonService: CommonService) {
  }

  
  getGames() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getGame(eventId)
  {
   return new Promise((resolve, reject) => {
     this.commonService.get(this.endpoint + eventId + '/').then((result) => {
       resolve(result);
     }, (error) => {
       reject(error);
     });
   });
 }

}
