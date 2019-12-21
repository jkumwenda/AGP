import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PermissionService } from '../../../../shared/services/permission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.css']
})
export class AddPermissionComponent implements OnInit {
  moduleTitle = 'Add Permission';
  public permissionForm: FormGroup;
  private permissionData: any;

  constructor(
    private formBuilder: FormBuilder,
    private permissionService: PermissionService,
    private router: Router
  ) { }

  addPermission() {
    const data  = this.permissionForm.value;
    this.permissionData = {
       permission: data.permission,
       code: data.code,
       permission_desc: data.permission_desc,
    };

    this.permissionService.addPermission(this.permissionData).then((result) => {
      this.router.navigate(['/manage/permissions']);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.permissionForm = this.formBuilder.group({
      permission: ['', Validators.compose([Validators.required])],
      code: ['', Validators.compose([Validators.required])],
      permission_desc: ['', Validators.compose([Validators.required])],
    });
  }

}
