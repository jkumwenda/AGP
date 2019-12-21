import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Permission } from "src/app/shared/interfaces/permission";
import { PermissionService } from "src/app/shared/services/permission.service";

@Component({
  selector: "app-edit-permission",
  templateUrl: "./edit-permission.component.html",
  styleUrls: ["./edit-permission.component.css"]
})
export class EditPermissionComponent implements OnInit {
  public moduleTitle = "Edit Permission";
  public permissionForm: FormGroup;
  private permissionData: any;
  public permissionId: any;
  public permission: Permission;
  public code: Permission;
  public permissionDesc: Permission;

  constructor(
    private formBuilder: FormBuilder,
    private permissionService: PermissionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.permissionId = activatedRoute.snapshot.params["id"];
    this.initializePermissionForm();
  }

  initializePermissionForm() {
    if (this.permission == null) {
      this.permission = new Permission();
      this.permission.permission = null;
      this.permission.code = null;
      this.permission.permission_desc = null;

    }
    this.permissionForm = this.formBuilder.group({
      permission: [this.permission.permission, Validators.compose([Validators.required])],
      code: [this.permission.code, Validators.compose([Validators.required])],
      permission_desc: [this.permission.permission_desc, Validators.compose([Validators.required])],
    });
  }

  getPermission(permissionId) {
    this.permissionService.getPermission(permissionId).then(
      (result: Permission) => {
        this.permission = result;
        this.initializePermissionForm();
      },
      error => {}
    );
  }

  editPermission() {
    const data = this.permissionForm.value;
    this.permissionData = {
      permission: data.permission,
      code:data.code,
      permission_desc:data.permission_desc
    };

    this.permissionService.editPermission(this.permissionId, this.permissionData).then(
      result => {
        this.router.navigate(["/manage/permissions/"]);
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.getPermission(this.permissionId);
  }
}
