import { Component, OnInit, Input } from '@angular/core';
import { Permission } from 'src/app/shared/interfaces/permission';

@Component({
  selector: 'app-user-role-permissions',
  templateUrl: './user-role-permissions.component.html',
  styleUrls: ['./user-role-permissions.component.css']
})
export class UserRolePermissionsComponent implements OnInit {
  @Input() permissions:Permission[]
  public moduleTitle:string= 'Permissions'
  constructor() { }

  ngOnInit() {
  }

}
