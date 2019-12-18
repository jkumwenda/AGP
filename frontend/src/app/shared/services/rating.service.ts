import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  public token: any;
  public endpoint: any = 'api/rating/';

  constructor(private commonService: CommonService) {
  }

  addRating(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getRatings() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getRating(ratingId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + ratingId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editRating(ratingId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + ratingId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteRating(ratingId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + ratingId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
