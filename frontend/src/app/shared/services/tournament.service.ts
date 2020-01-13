import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  public token: any;
  public endpoint: any = 'api/event/';

  constructor(private commonService: CommonService) {
  }

  addTournament(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getTournaments() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getTournament(tournamentId)
   {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + tournamentId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editTournament(tournamentId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + tournamentId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteTournament(tournamentId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + tournamentId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
