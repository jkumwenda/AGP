import { Component, OnInit } from '@angular/core';
import { Format } from '../../../shared/interfaces/format';
import { Router } from '@angular/router';
import { ProfileService } from '../../../shared/services/profile.service';
import { Profile } from 'src/app/shared/interfaces/profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  moduleTitle = 'Profile';
  public profiles: Profile[];

  constructor(
    private profileService: ProfileService,
    private router: Router,
  ) { }

  getProfiles() {
    this.profileService.getProfiles().then((result) => {
      this.profiles = result as Profile[];
    }, (error) => {
    });
  }

  checkIfEmpty(){
    return Array.isArray(this.profiles) && this.profiles.length
  }

  editProfile(profileId) {
    this.router.navigate(['/manage/edit-profile', profileId]);
  }

  deleteProfile(profileId) {
    this.profileService.deleteProfile(profileId).then((result) => {
      this.getProfiles();
    }, (error) => {
    });
  }

  ngOnInit() {
    this.getProfiles();
  }
}
