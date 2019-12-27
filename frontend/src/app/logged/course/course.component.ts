import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/shared/services/course.service";
import { Course } from "src/app/shared/interfaces/course";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  public course: Course;
  public editComponentCreated: boolean = false;

  constructor(private couseService: CourseService) {
    this.course = new Course(null, null);
  }

  getCourse() {
    this.couseService.getCourse(5).then(
      (result: Course) => {
        this.course = new Course(null, null);
        this.course = result;
      },
      error => console.log(error)
    );
  }

  checkIfDefined() {
    if (typeof this.course === undefined) return false;

    return false;
  }

  ngOnInit() {
    this.getCourse();
  }
}
