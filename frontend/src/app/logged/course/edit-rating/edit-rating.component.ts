import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Rating } from "src/app/shared/interfaces/rating";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RatingService } from "src/app/shared/services/rating.service";
import { Subscription } from "rxjs";
import { CourseCommunicationService } from "src/app/shared/services/course-communication.service";

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
  private subscription: Subscription;
  private formData: any;

  constructor(
    private ratingService: RatingService,
    private formBuilder: FormBuilder,
    private courseCommunicationService: CourseCommunicationService
  ) {
    this.initializeRateForm(Rating.initializeRating());
    this.subscribe();
  }

  editRating() {
    console.log(this.rating);
    this.ratingService.editRating(this.ratingId, this.ratingForm.value).then(
      (result: Rating) => {
        this.closeModal.nativeElement.click();
        this.courseCommunicationService.sendRating(this.ratingForm.value);
      },
      error => console.log(error)
    );
  }

  initializeRateForm(rating) {
    if (this.rating === undefined) this.rating = Rating.initializeRating();
    this.ratingId = rating.pk_ratingid;
    this.ratingForm = this.formBuilder.group({
      course_rating: [
        rating.course_rating,
        Validators.compose([Validators.required])
      ],
      sloppy_rating: [
        rating.sloppy_rating,
        Validators.compose([Validators.required])
      ],
      par: [rating.par, Validators.compose([Validators.required])],
      fk_courseid: rating.fk_courseid,
      pk_ratingid: rating.pk_ratingid
    });
  }

  subscribe() {
    this.subscription = this.courseCommunicationService
      .getRating()
      .subscribe(rating => {
        this.rating = rating;
        this.initializeRateForm(rating);
      });
  }

  ngOnInit() {
    this.initializeRateForm(this.rating);
  }
}
