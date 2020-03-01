import { Component, OnInit } from '@angular/core';
import { Permission } from '../../../shared/interfaces/permission';
import { Router } from '@angular/router';
import { PermissionService } from '../../../shared/services/permission.service';
import {PermissionCheckService} from '../../../shared/services/permission-check.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  moduleTitle = 'Permission';
  public permissions: Permission[];
  public permissionCodes = ['addPermission', 'viewPermission', 'editPermission', 'deletePermission'];
  public loggedProfile = 2;
  public profilePermissions: string[] = [];

  constructor(
    private permissionService: PermissionService,
    private permissionCheckService: PermissionCheckService,
    private router: Router,
  ) { }

  getPermissions() {
    this.permissionService.getPermissions().then((result) => {
      this.permissions = result as Permission[];
    }, (error) => {
    });
  }

  checkIfEmpty(){
    return Array.isArray(this.permissions) && this.permissions.length
  }

  editPermission(permissionId) {
    console.log(permissionId)
    this.router.navigate(['/manage/edit-permission', permissionId]);
  }

  deletePermission(permissionId) {
    this.permissionService.deletePermission(permissionId).then((result) => {
      this.getPermissions();
    }, (error) => {
    });
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
    this.getPermissions();
    this.checkPermissions();
  }
}
