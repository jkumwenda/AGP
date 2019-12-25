import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class CourseTypeService {
  public token: any;
  public endpoint: any = 'api/course_type/';

  constructor(
    private commonService: CommonService) {
  }

  addCourseType(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getCourseTypes() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getCourseType(courseTypeId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + courseTypeId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editCourseType(courseTypeId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + courseTypeId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteCourseType(courseTypeId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + courseTypeId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
