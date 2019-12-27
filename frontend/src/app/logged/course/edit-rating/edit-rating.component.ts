import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Rating } from "src/app/shared/interfaces/rating";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RatingService } from "src/app/shared/services/rating.service";

@Component({
  selector: "app-edit-rating",
  templateUrl: "./edit-rating.component.html",
  styleUrls: ["./edit-rating.component.css"]
})
export class EditRatingComponent implements OnInit {
  @Input() rating: Rating;
  @Input() courseId: number;
  @ViewChild("closeModal", null) closeModal: ElementRef;

  public moduleTitle: string = "Edit Rating";
  public ratingId: number;
  public ratingForm: FormGroup;

  constructor(
    private ratingService: RatingService,
    private formBulder: FormBuilder
  ) {}

  editRating() {
    this.ratingService
      .editRating(this.rating.pk_ratingid, this.ratingForm.value)
      .then(
        result => this.closeModal.nativeElement.click(),
        error => console.log(error)
      );
  }

  initialiseRatingForm() {
    if (this.rating == null) this.rating = Rating.initializeRating();

    this.ratingForm = this.formBulder.group({
      course_rating: [
        this.rating.course_rating,
        Validators.compose([Validators.required])
      ],
      sloppy_rating: [
        this.rating.sloppy_rating,
        Validators.compose([Validators.required])
      ],
      par: [this.rating.par, Validators.compose([Validators.required])],
      fk_courseid: this.courseId
    });
  }

  ngOnInit() {
    this.initialiseRatingForm();
  }
}
