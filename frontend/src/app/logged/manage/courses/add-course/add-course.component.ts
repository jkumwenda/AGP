import { Component, OnInit } from "@angular/core";
import { Country } from "src/app/shared/interfaces/country";
import { CountryService } from "src/app/shared/services/country.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CourseService } from "src/app/shared/services/course.service";
import { Router } from "@angular/router";
//import * as $ from "jquery";
@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.css"]
})
export class AddCourseComponent implements OnInit {
  public moduleTitle: string = "Add Course";
  public courseForm: FormGroup;
  public countries: Country[];

  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private router: Router
  ) {}


  addCourse() {
    this.courseService.addCourse(this.courseForm.value).then(
      result => this.router.navigate(["manage/courses"]),
      error => console.log(error)
    );
  }
  getCountries() {
    this.countryService.getCountries().then(
      (result: Country[]) => {
        this.countries = result

      },
      error => console.log(error)
    );
  }

  ngOnInit() {

    this.getCountries();
    this.courseForm = this.formBuilder.group({
      course: ["", Validators.compose([Validators.required])],
      pk_countryid: ["", Validators.compose([Validators.required])]
    });

    /** manually selecting bootstrap version for bootstrap-select plugin  */
    // $('select').selectpicker()
    // $.fn.selectpicker.Constructor.BootstrapVersion = "4";
    // $('select').selectpicker('refresh')
  }
}
