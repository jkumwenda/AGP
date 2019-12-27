import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/shared/interfaces/club';
import { ClubService } from 'src/app/shared/services/club.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  public moduleTitle:string="Clubs"
  public clubs:Club[]


  constructor(
    private clubService:ClubService,
    private router:Router
  ) { }

  getClubs(){
    this.clubService.getClubs().then(
      (result:Club[])=>this.clubs=result,
      error=>console.log(error)
    )
  }

  checkIfEmpty() {
    return Array.isArray(this.clubs) && this.clubs.length;
  }

  deleteClub(clubId){
    this.clubService.deleteClub(clubId).then(
      result=>this.getClubs(),
      error=>console.log(error)
    )
  }

  editClub(clubId){
    this.router.navigate(['manage/edit-club', clubId]);
  }

  ngOnInit() {
    this.getClubs()
  }

}
