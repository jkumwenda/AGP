import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class CourseTypeHoleService {
  public token: any;
  public endpoint: any = 'api/course_type_hole/';

  constructor(
    private commonService: CommonService) {
  }

  addCourseTypeHole(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getCourseTypeHoles() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getCourseTypeHole(courseTypeHoleId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + courseTypeHoleId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editCourseTypeHole(courseTypeHoleId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + courseTypeHoleId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteCourseTypeHole(courseTypeHoleId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + courseTypeHoleId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
