import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Club } from "src/app/shared/interfaces/club";
import { ClubService } from "src/app/shared/services/club.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-club",
  templateUrl: "./edit-club.component.html",
  styleUrls: ["./edit-club.component.css"]
})
export class EditClubComponent implements OnInit {
  public moduleTitle: string = "Edit Club";
  public clubForm: FormGroup;
  private clubId: number;
  private club: Club;

  constructor(
    private clubService: ClubService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.clubId = activatedRoute.snapshot.params["id"];
    this.initializeClubForm();
  }

  initializeClubForm() {
    if (this.club == null) this.club = new Club(null, null);

    this.clubForm = this.formBuilder.group({
      club: [this.club.club, Validators.compose([Validators.required])]
    });
  }

  editClub(){
    this.clubService.editClub(this.clubId,this.clubForm.value).then(
      result=> this.router.navigate(['manage/clubs/']),
      error=> console.log(error)
    )
  }

  getClub(clubId){
    this.clubService.getClub(clubId).then(
      (result:Club)=>{
        this.club=result
        this.initializeClubForm()
      },
      error=>console.log(error)
    )
  }

  ngOnInit() {
    this.getClub(this.clubId)
  }
}
