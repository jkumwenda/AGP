import { ManageNavComponent } from './manage/manage-nav/manage-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/services/auth-guard.service';
import { RoleGuard } from 'src/app/shared/services/role-guard.service';

import { GendersComponent } from './genders/genders.component';
import { AddGenderComponent } from './genders/add-gender/add-gender.component';
import { EditGenderComponent } from './genders/edit-gender/edit-gender.component';
import { GenderComponent } from './genders/gender/gender.component';
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
import { HolesComponent } from './holes/holes.component';
import { AddHoleComponent } from './holes/add-hole/add-hole.component';
import { EditHoleComponent } from './holes/edit-hole/edit-hole.component';
import { HoleComponent } from './holes/hole/hole.component';
import { CountriesComponent } from './countries/countries.component';
import { AddCountryComponent } from './countries/add-country/add-country.component';
import { EditCountryComponent } from './countries/edit-country/edit-country.component';
import { CountryComponent } from './countries/country/country.component';
import { TypesComponent } from './types/types.component';
import { AddTypeComponent } from './types/add-type/add-type.component';
import { EditTypeComponent } from './types/edit-type/edit-type.component';
import { TypeComponent } from './types/type/type.component';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { ClubsComponent } from './clubs/clubs.component';
import { AddClubComponent } from './clubs/add-club/add-club.component';
import { ClubComponent } from './clubs/club/club.component';
import { EditClubComponent } from './clubs/edit-club/edit-club.component';
import { FormatsComponent } from './formats/formats.component';
import { AddFormatComponent } from './formats/add-format/add-format.component';
import { EditFormatComponent } from './formats/edit-format/edit-format.component';
import { FormatComponent } from './formats/format/format.component';
import { DrawTypesComponent } from './draw-types/draw-types.component';
import { AddDrawTypeComponent } from './draw-types/add-draw-type/add-draw-type.component';
import { EditDrawTypeComponent } from './draw-types/edit-draw-type/edit-draw-type.component';
import { DrawTypeComponent } from './draw-types/draw-type/draw-type.component';
import { EventTypesComponent } from './event-types/event-types.component';
import { AddEventTypeComponent } from './event-types/add-event-type/add-event-type.component';
import { EditEventTypeComponent } from './event-types/edit-event-type/edit-event-type.component';
import { EventTypeComponent } from './event-types/event-type/event-type.component';
import { from } from 'rxjs';
import { CourseComponent } from '../course/course.component';

const manageRoutes: Routes = [
  {path: 'manage', component: ManageComponent,
  children: [
    {path: 'roles', component: RolesComponent},
    {path: 'manage-nav', component: ManageNavComponent},
    {path: 'add-role', component: AddRoleComponent},
    {path: 'edit-role/:id', component: EditRoleComponent},
    {path: 'role', component: RoleComponent},
    {path: 'permissions', component: PermissionsComponent},
    {path: 'add-permission', component: AddPermissionComponent},
    {path: 'edit-permission/:id', component: EditPermissionComponent},
    {path: 'permission', component: PermissionComponent},
    {path: 'users', component: UsersComponent},
    {path: 'add-user', component: AddUserComponent},
    {path: 'edit-user', component: EditUserComponent},
    {path: 'user/:id', component: UserComponent},
    {path: 'genders', component: GendersComponent},
    {path: 'add-gender', component: AddGenderComponent},
    {path: 'edit-gender/:id', component: EditGenderComponent},
    {path: 'gender', component: GenderComponent},
    {path: 'holes', component: HolesComponent},
    {path: 'add-hole', component: AddHoleComponent},
    {path: 'edit-hole/:id', component: EditHoleComponent},
    {path: 'hole', component: HoleComponent},
    {path: 'countries', component: CountriesComponent},
    {path: 'add-country', component: AddCountryComponent},
    {path: 'edit-country/:id', component: EditCountryComponent},
    {path: 'country', component: CountryComponent},
    {path: 'types', component: TypesComponent},
    {path: 'add-type', component: AddTypeComponent},
    {path: 'edit-type/:id', component: EditTypeComponent},
    {path: 'type', component: TypeComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'add-course', component: AddCourseComponent},
    {path: 'edit-course/:id', component: EditCourseComponent},
    { path: 'club', component: ClubComponent },
    { path: 'clubs', component: ClubsComponent},
    {path: 'add-club', component: AddClubComponent},
    {path: 'edit-club/:id', component: EditClubComponent},
    {path: 'course/:id', component: CourseComponent},
    {path: 'formats', component: FormatsComponent},
    {path: 'add-format', component: AddFormatComponent},
    {path: 'edit-format/:id', component: EditFormatComponent},
    {path: 'format', component: FormatComponent},
    {path: 'draw-types', component: DrawTypesComponent},
    {path: 'add-draw-type', component: AddDrawTypeComponent},
    {path: 'edit-draw-type/:id', component: EditDrawTypeComponent},
    {path: 'draw-type', component: DrawTypeComponent},
    {path: 'role/:id', component: RoleComponent},
    {path: 'draw-type', component: DrawTypeComponent},
    {path: 'event-types', component: EventTypesComponent},
    {path: 'add-event-type', component: AddEventTypeComponent},
    {path: 'edit-event-type/:id', component: EditEventTypeComponent},
    { path: 'event-type', component: EventTypeComponent },
    { path: 'draw-type', component: DrawTypeComponent },
  ], canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(manageRoutes)
  ],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
