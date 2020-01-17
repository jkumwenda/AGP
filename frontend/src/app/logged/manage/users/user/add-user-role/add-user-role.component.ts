
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Role } from 'src/app/shared/interfaces/role';
import { RoleService } from 'src/app/shared/services/role.service';
import { ProfileRole } from 'src/app/shared/interfaces/profile-role';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfileRoleService } from 'src/app/shared/services/profile-role.service';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.css']
})

export class AddUserRoleComponent implements OnInit {
  @Input() userRoles: ProfileRole[];
  @Output() userRoleCreated = new EventEmitter<ProfileRole>();

  public moduleTitle = 'Assign Roles';
  public roles: Role[] = [];
  public AddComponentCreated: boolean = false;
  public roleForm: FormGroup;
  public roleArray: any = [];
  public profileId: number;
  @ViewChild('closeModal', null) closeModal: ElementRef;

  constructor(
    private roleService: RoleService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private profileRoleService: ProfileRoleService
  ) {
    this.profileId = this.activatedRoute.snapshot.params.id;
  }

  getRoles() {
    this.roleService.getRoles().then(
      (result: Role[]) => {
        this.roles = result.filter(
          item =>
            !this.userRoles.some(ur => ur.fk_roleid.pk_roleid == item.pk_roleid)
        );
        this.roles.forEach(r => r.selected = false );
        this.initialiseForm();
        this.initRoleArray();
      },
      error => {}
    );
  }

  ngOnChanges(): void {
    this.getRoles();
  }

  initialiseForm() {
    this.roleForm = this.formBuilder.group({
      roles: this.userRolesArray()
    });
  }

  userRolesArray() {
    const arr = this.roles.map(role => {
      return this.formBuilder.control(role.selected);
    });

    return this.formBuilder.array(arr);
  }

  initRoleArray() {
    this.roleArray = this.roleForm.get('roles')['controls'];
  }

  submit(value) {
    const formValue = Object.assign({}, value, {
      roles: value.roles.map((selected, i) => {
        return {
          id: this.roles[i].pk_roleid,
          selected
        };
      })
    });
    this.createUserRole(formValue.roles);
    this.closeModal.nativeElement.click();
    this.ngOnInit();
  }

  createUserRole(roleArray) {
    roleArray.forEach(role => {
      if (role.selected) {
        this.profileRoleService
          .addProfileRole({
            profile_id: this.profileId,
            role_id: role.id
          })
          .then(
            (result: ProfileRole) => {
              this.userRoleCreated.emit(result);
              this.roleArray.splice(0, 1);
              this.getRoles();
            },

            error => {}
          );
      }
    });
  }

  ngOnInit() {
    this.getRoles();
  }
}
