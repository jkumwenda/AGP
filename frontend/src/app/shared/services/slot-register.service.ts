import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class slotRegisterService {
  public token: any;
  public endpoint: any = 'api/slot_register/';

  constructor(private commonService: CommonService) {
  }

  addSlotRegister(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }


  getSlotRegisters() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getSlotRegister(slotRegisterId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + slotRegisterId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editSlotRegister(slotRegisterId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + slotRegisterId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteSlotRegister(slotRegisterId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + slotRegisterId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
