import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClubService } from 'src/app/shared/services/club.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-add-club",
  templateUrl: "./add-club.component.html",
  styleUrls: ["./add-club.component.css"]
})
export class AddClubComponent implements OnInit {
  public moduleTitle: string = "Add Club";
  public clubForm:FormGroup

  constructor(
    private clubService:ClubService,
    private formBuilder:FormBuilder,
    private router:Router
  ) {}

  addClub(){
    this.clubService.addClub(this.clubForm.value).then(
      (result)=> this.router.navigate(['manage/clubs']),
      error=> console.log(error)
    )
  }
  ngOnInit() {
    this.clubForm= this.formBuilder.group({
      club:["", Validators.compose([Validators.required])]
    })
  }
}
