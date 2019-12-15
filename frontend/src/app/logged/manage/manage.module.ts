import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';

import { ManageRoutingModule } from './manage-routing.module';
import { UserComponent } from './users/user/user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { PermissionComponent } from './permissions/permission/permission.component';
import { EditPermissionComponent } from './permissions/edit-permission/edit-permission.component';
import { AddPermissionComponent } from './permissions/add-permission/add-permission.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { RoleComponent } from './roles/role/role.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { RolesComponent } from './roles/roles.component';
import { ManageComponent } from './manage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GendersComponent } from './genders/genders.component';
import { AddGenderComponent } from './genders/add-gender/add-gender.component';
import { EditGenderComponent } from './genders/edit-gender/edit-gender.component';
import { GenderComponent } from './genders/gender/gender.component';
import { HolesComponent } from './holes/holes.component';
import { AddHoleComponent } from './holes/add-hole/add-hole.component';
import { EditHoleComponent } from './holes/edit-hole/edit-hole.component';
import { HoleComponent } from './holes/hole/hole.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './countries/country/country.component';
import { AddCountryComponent } from './countries/add-country/add-country.component';
import { EditCountryComponent } from './countries/edit-country/edit-country.component';
import { TypesComponent } from './types/types.component';
import { AddTypeComponent } from './types/add-type/add-type.component';
import { EditTypeComponent } from './types/edit-type/edit-type.component';
import { TypeComponent } from './types/type/type.component';

@NgModule({
  declarations: [
    ManageComponent,
    UsersComponent,
    RolesComponent,
    AddRoleComponent,
    EditRoleComponent,
    RoleComponent,
    AddUserComponent,
    EditUserComponent,
    UserComponent,
    PermissionsComponent,
    AddPermissionComponent,
    EditPermissionComponent,
    PermissionComponent,
    SidebarComponent,
    GendersComponent,
    AddGenderComponent,
    EditGenderComponent,
    GenderComponent,
    HolesComponent,
    AddHoleComponent,
    EditHoleComponent,
    HoleComponent,
    CountriesComponent,
    CountryComponent,
    AddCountryComponent,
    EditCountryComponent,
    TypesComponent,
    AddTypeComponent,
    EditTypeComponent,
    TypeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    HttpClientModule,
    CommonModule,
    ManageRoutingModule
  ],
  exports: [
    ManageRoutingModule
  ]
})
export class ManageModule { }
