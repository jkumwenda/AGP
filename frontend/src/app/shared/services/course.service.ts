import { Injectable } from "@angular/core";
import { CommonService } from "./common.service";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  public token: any;
  public endpoint: any = "api/course/";

  constructor(private commonService: CommonService) {}

  addCourse(data) {
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

  getCourses() {
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

  getCourse(courseId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + courseId + "/").then(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getCourseTypes(courseId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + courseId + "/types/").then(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  editCourse(courseId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + courseId + "/", data).then(
        result => {
          resolve(true);
        },
        error => {
          reject(false);
        }
      );
    });
  }

  deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + courseId + "/").then(
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
