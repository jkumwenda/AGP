import { Component, OnInit } from "@angular/core";
import { CountryService } from "src/app/shared/services/country.service";
import { CourseService } from "src/app/shared/services/course.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Country } from "src/app/shared/interfaces/country";
import { Course } from "src/app/shared/interfaces/course";

@Component({
  selector: "app-edit-course",
  templateUrl: "./edit-course.component.html",
  styleUrls: ["./edit-course.component.css"]
})
export class EditCourseComponent implements OnInit {
  public moduleTitle: string = "Edit Course";
  public courseForm: FormGroup;
  public countries: Country[];
  private courseId: number;
  public course: Course;

  getCountries() {
    this.countryService.getCountries().then(
      (result: Country[]) => (this.countries = result),
      error => console.log(error)
    );
  }

  editCourse() {
    this.courseService.editCourse(this.courseId, this.courseForm.value).then(
      result => {
        this.router.navigate(["manage/courses"]);
      },
      error => console.log(error)
    );
  }

  initializeCourseForm() {
    if (this.course == null) {
      this.course = new Course(null, new Country(null, null));
    }

    this.courseForm = this.formBuilder.group({
      course: [this.course.course, Validators.compose([Validators.required])],
      pk_countryid: [
        this.course.country.pk_countryid,
        Validators.compose([Validators.required])
      ]
    });
  }

  getCourse(courseId) {
    this.courseService.getCourse(courseId).then(
      (result: Course) => {
        this.course = result;
        console.log(this.course);
        this.initializeCourseForm();
      },
      error => console.log(error)
    );
  }
  constructor(
    private countryService: CountryService,
    private courseService: CourseService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.courseId = activatedRoute.snapshot.params["id"];
    this.initializeCourseForm();
  }

  ngOnInit() {
    this.getCountries();
    this.getCourse(this.courseId);
    /** manually selecting bootstrap version for bootstrap-select plugin  */
    //  $('select').selectpicker()
    //  $.fn.selectpicker.Constructor.BootstrapVersion = "4";
    //  $('select').selectpicker('refresh')
  }
}
