import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';
import { CourseService } from 'src/app/shared/services/course.service';
import { Router } from '@angular/router';
import {PermissionCheckService} from '../../../shared/services/permission-check.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public moduleTitle = 'Course';
  public courses: Course[];
  public permissionCodes = ['addCourse', 'viewCourse', 'editCourse', 'deleteCourse'];
  public loggedProfile = 2;
  public profilePermissions: string[] = [];

  constructor(
    private courseService: CourseService,
    private permissionCheckService: PermissionCheckService,
    private router: Router) {}

  checkIfEmpty() {
    return Array.isArray(this.courses) && this.courses.length;
  }

  getCourses() {
    this.courseService.getCourses().then(
      (result: Course[]) => (this.courses = result),
      error => console.log(error)
    );
  }

  deleteCourse(courseId) {
    this.courseService.deleteCourse(courseId).then(
      result => this.getCourses(),
      error => console.log(error)
    );
  }

  editCourse(courseId) {
    this.router.navigate(['manage/edit-course', courseId]);
  }

  viewCourse(courseId) {
    this.router.navigate(['course', courseId]);
  }

  checkPermissions() {
    this.permissionCheckService.permissionCheck(this.loggedProfile, this.permissionCodes).then(
      (result: string[]) => this.profilePermissions = result,
      (error) => console.log(error)
    );
  }

  checkIfPermitted(code) {
    return this.profilePermissions.find(item => item === code);
  }

  ngOnInit() {
    this.getCourses();
    this.checkPermissions();
  }
}
