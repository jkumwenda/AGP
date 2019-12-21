import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../../../../shared/services/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  moduleTitle = 'Add Role';
  public roleForm: FormGroup;
  private roleData: any;

  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private router: Router
  ) { }

  addRole() {
    const data  = this.roleForm.value;
    this.roleData = {
       role: data.role,
       role_desc: data.role_desc,
    };

    this.roleService.addRole(this.roleData).then((result) => {
      this.router.navigate(['/manage/roles']);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.roleForm = this.formBuilder.group({
      role: ['', Validators.compose([Validators.required])],
      role_desc: ['', Validators.compose([Validators.required])],
    });
  }

}
