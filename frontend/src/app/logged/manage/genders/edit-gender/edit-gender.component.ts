import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenderService } from '../../../../shared/services/gender.service';
import { Gender } from '../../../../shared/interfaces/gender';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-gender',
  templateUrl: './edit-gender.component.html',
  styleUrls: ['./edit-gender.component.css']
})
export class EditGenderComponent implements OnInit {
  moduleTitle = 'Edit Gender';
  public genderForm: FormGroup;
  private genderData: any;
  public genderId: any;
  public gender: Gender;

  constructor(
    private formBuilder: FormBuilder,
    private genderService: GenderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.genderId = activatedRoute.snapshot.params['id'];
    this.initializeGenderForm();
  }

  getGender(genderId) {
    this.genderService.getGender(genderId).then((result) => {
      this.gender = result as Gender;
      this.initializeGenderForm();
    }, (error) => {
    });
  }

  editGender() {
    const data  = this.genderForm.value;
    this.genderData = {
      gender: data.gender,
    };

    this.genderService.editGender(this.genderId, this.genderData).then((result) => {
      this.router.navigate(['/manage/genders/']);
    }, (error) => {
      console.log(error);
    });
  }

  initializeGenderForm() {
    if (this.gender == null) {
      this.gender = new Gender();
      this.gender.gender = null;
    }
    this.genderForm = this.formBuilder.group({
      gender: [this.gender.gender, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.getGender(this.genderId);
  }

}


