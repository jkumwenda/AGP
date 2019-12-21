import { Component, OnInit } from '@angular/core';
import { Permission } from '../../../shared/interfaces/permission';
import { Router } from '@angular/router';
import { PermissionService } from '../../../shared/services/permission.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  moduleTitle = 'Permission';
  public permissions: Permission[];

  constructor(
    private permissionService: PermissionService,
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

  ngOnInit() {
    this.getPermissions();
  }
}
