import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/shared/interfaces/club';
import { ClubService } from 'src/app/shared/services/club.service';
import { Router } from '@angular/router';
import { PermissionCheckService } from 'src/app/shared/services/permission-check.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  public moduleTitle = 'Clubs';
  public clubs: Club[];
  public permissionCodes = ['addClub', 'viewClub', 'editClub', 'deleteClub'];
  public loggedProfile = 2;
  public profilePermissions: string[] = [];


  constructor(
    private clubService: ClubService,
    private permissionCheckService: PermissionCheckService,
    private router: Router
  ) { }

  getClubs() {
    this.clubService.getClubs().then(
      (result: Club[]) => this.clubs = result,
      error => console.log(error)
    );
  }

  checkIfEmpty() {
    return Array.isArray(this.clubs) && this.clubs.length;
  }

  deleteClub(clubId) {
    this.clubService.deleteClub(clubId).then(
      result => this.getClubs(),
      error => console.log(error)
    );
  }

  editClub(clubId) {
    this.router.navigate(['manage/edit-club', clubId]);
  }

  checkPermissions() {
    this.permissionCheckService.permissionCheck(this.loggedProfile, this.permissionCodes).then(
      (result: string[]) => this.profilePermissions = result,
      (error) => console.log(error)
    );
  }

  checkIfPermitted(code) {
    return this.profilePermissions.find(item => item === code);
  }


  ngOnInit() {
    this.getClubs();
    this.checkPermissions();
  }

}
