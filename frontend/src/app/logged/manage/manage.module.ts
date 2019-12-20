import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

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
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { ClubsComponent } from './clubs/clubs.component';
import { AddClubComponent } from './clubs/add-club/add-club.component';
import { EditClubComponent } from './clubs/edit-club/edit-club.component';
import { ClubComponent } from './clubs/club/club.component';
import { ManageNavComponent } from './manage/manage-nav/manage-nav.component';
import { FormatsComponent } from './formats/formats.component';
import { AddFormatComponent } from './formats/add-format/add-format.component';
import { EditFormatComponent } from './formats/edit-format/edit-format.component';
import { FormatComponent } from './formats/format/format.component';
import { DrawTypesComponent } from './draw-types/draw-types.component';
import { AddDrawTypeComponent } from './draw-types/add-draw-type/add-draw-type.component';
import { EditDrawTypeComponent } from './draw-types/edit-draw-type/edit-draw-type.component';
import { DrawTypeComponent } from './draw-types/draw-type/draw-type.component';

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
    TypeComponent,
    CoursesComponent,
    AddCourseComponent,
    EditCourseComponent,
    ClubsComponent,
    AddClubComponent,
    EditClubComponent,
    ClubComponent,
    ManageNavComponent,
    FormatsComponent,
    AddFormatComponent,
    EditFormatComponent,
    FormatComponent,
    DrawTypesComponent,
    AddDrawTypeComponent,
    EditDrawTypeComponent,
    DrawTypeComponent
  ],
  imports: [
    FormsModule,
    DataTablesModule,
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
