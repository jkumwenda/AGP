import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../shared/interfaces/user';
import { UserService } from '../../../../shared/services/user.service';
import { GenderService } from '../../../../shared/services/gender.service';
import { Gender } from './../../../../shared/interfaces/gender';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  moduleTitle = 'Add user';
  public userForm: FormGroup;
  public user: User;
  public genders: Gender[];
  private userData: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private genderService: GenderService,
    private router: Router
    ) {
   }

  addUser() {
    const data  = this.userForm.value;

    this.userData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      username: data.username,
      password: '0',
      userprofile: {fk_genderid: data.gender, phone: data.phone},
    };

    this.userService.addUser(this.userData).then((result) => {
      this.router.navigate(['/manage/users']);
    }, (error) => {
    });
  }

  getGenders() {
    this.genderService.getGenders().then((result) => {
      this.genders = result as Gender[];
    }, (error) => {
    });
  }

  ngOnInit() {
    this.getGenders();

    this.userForm = this.formBuilder.group({
      gender: ['', Validators.compose([Validators.required])],
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
    });
  }
}
