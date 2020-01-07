import { Component, OnInit } from "@angular/core";
import { Gender } from "src/app/shared/interfaces/gender";
import { GenderService } from "src/app/shared/services/gender.service";
import { User } from "src/app/shared/interfaces/user";
import { UserService } from "src/app/shared/services/user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProfileService } from "src/app/shared/services/profile.service";
import { Router } from "@angular/router";
//import * as $ from "jquery";
@Component({
  selector: "app-add-profile",
  templateUrl: "./add-profile.component.html",
  styleUrls: ["./add-profile.component.css"]
})
export class AddProfileComponent implements OnInit {
  public moduleTitle: string = "Add Profile";
  public profileForm: FormGroup;
  public genders: Gender[];
  public users: User[];

  constructor(
    private genderService: GenderService,
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private userService: UserService,
    private router: Router
  ) {}


  addProfile() {
    this.profileService.addProfile(this.profileForm.value).then(
      result => this.router.navigate(["manage/profiles"]),
      error => console.log(error)
    );
  }

  getGenders() {
    this.genderService.getGenders().then(
      (result: Gender[]) => {
        this.genders = result

      },
      error => console.log(error)
    );
  }

  getUsers() {
    this.userService.getUsers().then(
      (result: User[]) => {
        this.users = result

      },
      error => console.log(error)
    );
  }

  ngOnInit() {

    this.getGenders();
    this.profileForm = this.formBuilder.group({
      dob: ["", Validators.compose([Validators.required])],
      user_id: ["", Validators.compose([Validators.required])],
      fk_genderid: ["", Validators.compose([Validators.required])],
      phone: ["", Validators.compose([Validators.required])],
    });

    /** manually selecting bootstrap version for bootstrap-select plugin  */
    // $('select').selectpicker()
    // $.fn.selectpicker.Constructor.BootstrapVersion = "4";
    // $('select').selectpicker('refresh')
  }
}
