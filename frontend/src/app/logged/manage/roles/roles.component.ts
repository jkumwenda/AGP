import { Component, OnInit } from '@angular/core';
import { Role } from '../../../shared/interfaces/role';
import { Router } from '@angular/router';
import { RoleService } from '../../../shared/services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  moduleTitle = 'Role';
  public roles: Role[];

  constructor(
    private roleService: RoleService,
    private router: Router,
  ) { }

  getRoles() {
    this.roleService.getRoles().then((result) => {
      this.roles = result as Role[];
    }, (error) => {
    });
  }

  viewRole = (roleId) => this.router.navigate(['/manage/role', roleId])

  checkIfEmpty(){
    return Array.isArray(this.roles) && this.roles.length
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

  ngOnInit() {
    this.getRoles();
  }
}
