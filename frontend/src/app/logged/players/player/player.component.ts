import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfileService } from 'src/app/shared/services/user-profile.service';
import { Profile } from 'src/app/shared/interfaces/profile';
import { User } from "src/app/shared/interfaces/user";
import { Gender } from "src/app/shared/interfaces/gender";

import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
declare var require: any;
const data: any = require('./data.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  private profileId: number;
  public charts: Chart[];
  private profile: Profile;
  private user: User;
  private gender: Gender;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userProfileService: UserProfileService
  ) {
    this.initializeProfileData();
    this.profileId = activatedRoute.snapshot.params["id"];
    this.charts = [
      {
        data: data.Line,
        type: "Line"
      }
    ];
  }

  getPlayer(profileId) {
    this.userProfileService.getProfile(profileId).then(
      result => {
        this.profile = result as Profile;
        this.initializeProfileData();
      },
      error => {}
    );
  }

  initializeProfileData() {
    if (this.profile == null) {
      this.profile = new Profile(null, null);
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
    this.getPlayer(this.profileId);
  }
}
