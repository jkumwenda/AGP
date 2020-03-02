import { Component, OnInit } from '@angular/core';
import { Role } from '../../../shared/interfaces/role';
import { Router } from '@angular/router';
import { RoleService } from '../../../shared/services/role.service';
import {PermissionCheckService} from '../../../shared/services/permission-check.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  moduleTitle = 'Role';
  public roles: Role[];
  public permissionCodes = ['addRole', 'viewRole', 'editRole', 'deleteRole'];
  public loggedProfile:any = localStorage.getItem('profileID');
  public profilePermissions: string[] = [];

  constructor(
    private roleService: RoleService,
    private permissionCheckService: PermissionCheckService,
    private router: Router,
  ) {
  }

  getRoles() {
    this.roleService.getRoles().then((result) => {
      this.roles = result as Role[];
    }, (error) => {
    });
  }

  viewRole(roleId) {
    this.router.navigate(['/manage/role', roleId]);
  }

  checkIfEmpty() {
    return Array.isArray(this.roles) && this.roles.length;
  }

  editRole(roleId) {
    this.router.navigate(['/manage/edit-role', roleId]);
  }

  deleteRole(roleId) {
    this.roleService.deleteRole(roleId).then((result) => {
      this.getRoles();
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
    this.getRoles();
    this.checkPermissions();
  }

}
