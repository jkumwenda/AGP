import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/shared/interfaces/role';
import { RoleService } from 'src/app/shared/services/role.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {
  public moduleTitle = 'Edit Role';
  public roleForm: FormGroup;
  private roleData: any;
  public roleId: any;
  public role: Role;
  public roleDesc: Role;

  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.roleId = activatedRoute.snapshot.params['id'];
    this.initializeRoleForm();
  }

  initializeRoleForm() {
    if (this.role == null) {
      this.role = new Role();
      this.role.role = null;
      this.role.role_desc = null;

    }
    this.roleForm = this.formBuilder.group({
      role: [this.role.role, Validators.compose([Validators.required])],
      role_desc: [this.role.role_desc, Validators.compose([Validators.required])],
    });
  }

  getRole(roleId) {
    this.roleService.getRole(roleId).then(
      (result: Role) => {
        this.role = result;
        this.initializeRoleForm();
      },
      error => {}
    );
  }

  editRole() {
    const data = this.roleForm.value;
    this.roleData = {
      role: data.role,
      role_desc:data.role_desc
    };

    this.roleService.editRole(this.roleId, this.roleData).then(
      result => {
        this.router.navigate(['/manage/roles/']);
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.getRole(this.roleId);
  }
}
