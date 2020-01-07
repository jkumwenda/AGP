import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/shared/services/signup.service';
import { GenderService } from 'src/app/shared/services/gender.service';
import { Gender } from 'src/app/shared/interfaces/gender';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public moduleTitle = 'Sign Up';
  public genders: Gender[];
  public signupForm: FormGroup;

  constructor(
    private signupService: SignupService,
    private genderService: GenderService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  signup() {
    this.signupService.signup(this.signupForm.value).then(
      (result) => this.router.navigate(['manage/clubs']),
      error => console.log(error)
    );
  }

  getGenders() {
    this.genderService.getGendersNoAuth().then((result) => {
      this.genders = result as Gender[];
    }, (error) => {
    });
  }

  ngOnInit() {
    this.getGenders();

    this.signupForm = this.formBuilder.group({
      gender: ['', Validators.compose([Validators.required])],
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
}
