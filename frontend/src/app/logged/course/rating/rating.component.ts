import { Component, OnInit } from "@angular/core";
import { Rating } from "src/app/shared/interfaces/rating";
import { CourseCommunicationService } from "src/app/shared/services/course-communication.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnInit {

  public moduleTitle:string="Rating"
  public rating: Rating;
  private subscription: Subscription;
  public courseId: number;
  public editComponentCreated: boolean = false;
  public addComponentCreated: boolean = false;

  constructor(private courseCommunicationService: CourseCommunicationService) {
    this.rating = Rating.initializeRating();
    this.subscribe();
  }

  subscribe() {
    this.subscription = this.courseCommunicationService
      .getRating()
      .subscribe((rating: Rating) => {
        this.rating = rating;
        this.courseId = rating.fk_courseid;
      });
  }
  returnData(courseId) {
    return courseId;
  }



  ngOnInit() {}
}
