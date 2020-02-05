import { Component, OnInit } from "@angular/core";
import { Profile } from "src/app/shared/interfaces/profile";
import { UserProfileService } from "src/app/shared/services/user-profile.service";
import { UserService } from "src/app/shared/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  private profiles: Profile[];

  constructor(
    private userProfileService: UserProfileService,
    private userService: UserService,
    private router: Router
  ) {}

  getUsers() {
    this.userProfileService.getUserProfiles().then(
      result => {
        this.profiles = result as Profile[];
      },
      error => {}
    );
  }

  viewUser(profileId) {
    this.router.navigate(["/manage/user", profileId]);
  }

  editUser(profileId) {
    this.router.navigate(['/manage/edit-user', profileId]);
  }

  deleteUser(profileId) {
    this.userService.deleteUser(profileId).then((result) => {
      this.getUsers();
    }, (error) => {
    });
  }

  checkIfEmpty(){
    return Array.isArray(this.profiles) && this.profiles.length
  }

  ngOnInit() {
    this.getUsers();
  }
}
