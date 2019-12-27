import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { RatingService } from "src/app/shared/services/rating.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as $ from "jquery";
@Component({
  selector: "app-add-rating",
  templateUrl: "./add-rating.component.html",
  styleUrls: ["./add-rating.component.css"]
})
export class AddRatingComponent implements OnInit {
  @ViewChild("closeModal", null) closeModal: ElementRef;
  @Input() courseId: number;
  public moduleTitle: string = "Set Rating";
  public rateForm: FormGroup;

  addRate() {
    console.log(this.rateForm.value)
    this.rateService.addRating(this.rateForm.value).then(
      result => {
        this.closeModal.nativeElement.click();
        this.initialiseRatingForm();
      },
      error => console.log(error)
    );
  }

  constructor(
    private rateService: RatingService,
    private formBuilder: FormBuilder
  ) {}

  private initialiseRatingForm() {
    this.rateForm = this.formBuilder.group({
      course_rating: ["", Validators.compose([Validators.required])],
      sloppy_rating: ["", Validators.compose([Validators.required])],
      par: ["", Validators.compose([Validators.required])],
      fk_courseid: this.courseId
    });
  }

  ngOnInit() {
    this.initialiseRatingForm();
    //console.log(this.courseId);
  }
}
