import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeService } from 'src/app/shared/services/type.service';
import { Type } from 'src/app/shared/interfaces/type';
import {PermissionCheckService} from '../../../shared/services/permission-check.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  public moduleTitle = 'Course Type';
  public types: Type[];
  public permissionCodes = ['addCourseType', 'viewCourseType', 'editCourseType', 'deleteCourseType'];
  public loggedProfile = 2;
  public profilePermissions: string[] = [];


  constructor(
    private router: Router,
    private permissionCheckService: PermissionCheckService,
    private typeService: TypeService) {}


  checkIfEmpty() {
    return Array.isArray(this.types) && this.types.length;
  }

  getTypes() {
    this.typeService.getTypes().then(
      (result: Type[]) => (this.types = result),
      error => console.log(error)
    );
  }

  deleteType(typeId) {
    this.typeService.deleteType(typeId).then(
      result => {
        this.router.navigate(['manage/types']);
        this.getTypes();
      },
      error => console.log(error)
    );
  }

  editType(typeId) {
    this.router.navigate(['manage/edit-type', typeId]);
  }

  checkPermissions() {
    this.permissionCheckService.permissionCheck(this.loggedProfile, this.permissionCodes).then(
      (result: string[]) => this.profilePermissions = result,
      (error) => console.log(error)
    );
  }

  checkIfPermitted(code) {
    return this.profilePermissions.find(item => item === code);
  }

  ngOnInit() {
    this.getTypes();
    this.checkPermissions();
  }
}
