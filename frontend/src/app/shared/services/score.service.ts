import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  public token: any;
  public endpoint: any = 'api/score/';

  constructor(private commonService: CommonService) {}

  addScore(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getScores(profileId, eventId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(`${this.endpoint}?profile=${profileId}&event=${eventId}`).then(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }
  getAllScores(profileId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(`${this.endpoint}?profile=${profileId}`).then(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getScore(scoreId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + scoreId + '/').then(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  editScore(scoreId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + scoreId + '/', data).then(
        result => {
          resolve(true);
        },
        error => {
          reject(false);
        }
      );
    });
  }

  deleteScore(scoreId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + scoreId + '/').then(
        result => {
          resolve(true);
        },
        error => {
          reject(false);
        }
      );
    });
  }
}
