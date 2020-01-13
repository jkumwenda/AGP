import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Profile } from "src/app/shared/interfaces/profile";
import { UserProfileService } from "src/app/shared/services/user-profile.service";
import { User } from "src/app/shared/interfaces/user";
import { Gender } from "src/app/shared/interfaces/gender";
import { ProfileRole } from "src/app/shared/interfaces/profile-role";
import { ProfileRoleService } from "src/app/shared/services/profile-role.service";
import { Permission } from "src/app/shared/interfaces/permission";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  public moduleTitle = "User Profile";
  private profile: Profile;
  public profileRoles: ProfileRole[];
  private user: User;
  private fk_genderid: Gender;
  private profileId: number;
  public permissions: Permission[] = [];
  public viewPermissionComponentCreated: Boolean = false;
  public AddComponentCreated: Boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userProfileService: UserProfileService,
    private profileRoleService: ProfileRoleService
  ) {
    this.profileId = activatedRoute.snapshot.params["id"];
    this.initializeProfileData();
  }

  getUserProfile(profileId) {
    this.userProfileService.getProfile(profileId).then(
      result => {
        this.profile = result as Profile;
        this.initializeProfileData();
      },
      error => {}
    );
  }

  getProfileRoles(profileId) {
    this.profileRoleService.getProfileRoles(profileId).then(
      result => {
        this.profileRoles = result as ProfileRole[];
      },
      error => {
        this.profileRoles = [];
      }
    );
  }

  addUserRole(profileRole) {
    this.profileRoles.push(profileRole);
  }

  viewPermission(permissions) {
    this.viewPermissionComponentCreated = true;
    this.permissions = permissions;
  }
  deleteProfileRole(profileRoleId) {
    this.profileRoleService.deleteProfileRole(profileRoleId).then(
      result => {
        this.profileRoles = this.profileRoles.filter(
          pRole => pRole.pk_profile_roleid !== profileRoleId
        );
      },
      error => {}
    );
  }

  initializeProfileData() {
    if (this.profile == null) {
      this.profile = new Profile();
      this.profile.user = new User();
      this.profile.fk_genderid = new Gender();
      this.profile.dob = null;
      this.profile.phone = null;
      this.profile.user.username = null;
      this.profile.user.first_name = null;
      this.profile.user.last_name = null;
      this.profile.user.email = null;
      this.profile.fk_genderid.gender = null;
    }
    this.profile = this.profile;
  }

  ngOnInit() {
    this.getUserProfile(this.profileId);
    this.getProfileRoles(this.profileId);
  }
}
