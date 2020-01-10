import { Component, OnInit } from "@angular/core";
import { Profile } from "src/app/shared/interfaces/profile";
import { UserProfileService } from "src/app/shared/services/user-profile.service";
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
    private router: Router
  ) {}

  getUsers() {
    this.userProfileService.getUserProfiles().then(
      result => {
        this.profiles = result as Profile[];
        console.log(this.profiles);
      },
      error => {}
    );
  }

  viewUser(profileId) {
    this.router.navigate(["/manage/user", profileId]);
  }

  ngOnInit() {
    this.getUsers();
  }
}
