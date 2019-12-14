import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
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


const manageRoutes: Routes = [
  {path: 'manage', component: ManageComponent,
  children: [
    {path: 'roles', component: RolesComponent},
    {path: 'add-role', component: AddRoleComponent},
    {path: 'edit-role', component: EditRoleComponent},
    {path: 'role', component: RoleComponent},
    {path: 'permissions', component: PermissionsComponent},
    {path: 'add-permission', component: AddPermissionComponent},
    {path: 'edit-permission', component: EditPermissionComponent},
    {path: 'permission', component: PermissionComponent},
    {path: 'users', component: UsersComponent},
    {path: 'add-user', component: AddUserComponent},
    {path: 'edit-user', component: EditUserComponent},
    {path: 'user', component: UserComponent},
    {path: 'genders', component: GendersComponent},
    {path: 'add-gender', component: AddGenderComponent},
    {path: 'edit-gender/:id', component: EditGenderComponent},
    {path: 'gender', component: GenderComponent},
    {path: 'holes', component:HolesComponent},
    {path: 'add-hole', component:AddHoleComponent},
    {path: 'edit-hole/:id', component:EditHoleComponent},
    {path: 'hole', component:HoleComponent}
  ]}
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
