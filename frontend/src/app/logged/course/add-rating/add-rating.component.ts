import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter} from "@angular/core";
import { RatingService } from "src/app/shared/services/rating.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Rating } from 'src/app/shared/interfaces/rating';
import { CourseCommunicationService } from 'src/app/shared/services/course-communication.service';
@Component({
  selector: "app-add-rating",
  templateUrl: "./add-rating.component.html",
  styleUrls: ["./add-rating.component.css"]
})
export class AddRatingComponent implements OnInit {
  @ViewChild("closeModal", null) closeModal: ElementRef;
  @Input() courseId: number;
  @Output() ratingCreated= new EventEmitter<Rating>()

  public moduleTitle: string = 'Set Rating';
  public rateForm: FormGroup;

  addRate() {
    this.rateService.addRating(this.rateForm.value).then(
      (result:Rating) => {
        this.closeModal.nativeElement.click();
        this.courseCommunicationService.sendRating(result)
        this.initialiseRatingForm();

      },
      error => console.log(error)
    );
  }

  constructor(
    private rateService: RatingService,
    private formBuilder: FormBuilder,
    private courseCommunicationService: CourseCommunicationService
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
  }
}
