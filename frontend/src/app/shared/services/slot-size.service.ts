import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class SlotSizeService {
  public token: any;
  public endpoint: any = 'api/slot_size/';

  constructor(
    private commonService: CommonService) {
  }

  addSlotSize(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getSlotSizes() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getSlotSize(slotSizeId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + slotSizeId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editSlotSize(slotSizeId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + slotSizeId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteSlotSize(slotSizeId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + slotSizeId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
