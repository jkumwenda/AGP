import { Component, OnInit } from '@angular/core';
import { Gender } from '../../../shared/interfaces/gender';
import { Router } from '@angular/router';
import { GenderService } from '../../../shared/services/gender.service';

@Component({
  selector: 'app-genders',
  templateUrl: './genders.component.html',
  styleUrls: ['./genders.component.css']
})
export class GendersComponent implements OnInit {
  moduleTitle = 'Gender';
  public genders: Gender[];

  constructor(
    private genderService: GenderService,
    private router: Router,
  ) { }

  getGenders() {
    this.genderService.getGenders().then((result) => {
      this.genders = result as Gender[];
    }, (error) => {
    });
  }

  editGender(genderId) {
    this.router.navigate(['/manage/edit-gender', genderId]);
  }

  deleteGender(genderId) {
    this.genderService.deleteGender(genderId).then((result) => {
      this.getGenders();
    }, (error) => {
    });
  }

  checkIfEmpty(){
    return Array.isArray(this.genders) && this.genders.length
  }

  ngOnInit() {
    this.getGenders();
  }
}
