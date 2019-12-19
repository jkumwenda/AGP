import { Component, OnInit } from "@angular/core";
import { Course } from "src/app/shared/interfaces/course";
import { CourseService } from "src/app/shared/services/course.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
  public moduleTitle: string = "Course";
  public courses: Course[];

  constructor(private courseService: CourseService, private router: Router) {}

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
    this.router.navigate(['manage/edit-course', courseId])
  }
  ngOnInit() {
    this.getCourses();
  }
}
