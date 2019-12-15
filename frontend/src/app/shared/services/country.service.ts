import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  public token: any;
  public endpoint: any = 'api/country/';

  constructor(
    private commonService: CommonService) {
  }

  addCountry(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getCountrys() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getCountry(countryId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + countryId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editCountry(countryId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + countryId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteCountry(countryId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + countryId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
