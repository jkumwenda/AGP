import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/shared/services/role.service';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/shared/interfaces/role';
import { Permission } from 'src/app/shared/interfaces/permission';
import { PermissionService } from 'src/app/shared/services/permission.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  public moduleTitle="Role Permissions"
  public roleId:number
  public permissions:Permission[]=[]
  public rolePermissions: Permission[]=[]
  public selectedAll:Boolean=false
  public selectedAllRolePermission:Boolean=false

  constructor(
    private roleService: RoleService,
    private activatedRoute:ActivatedRoute,
    private permissionService:PermissionService
  ) {
    this.roleId= this.activatedRoute.snapshot.params['id']
    console.log(this.roleId)
  }

  getPermissions(){
    this.permissionService.getPermissions().then(
      (result:Permission[])=>{
        this.permissions = result.filter(item => !this.rolePermissions.some(rp=>rp.pk_permissionid==item.pk_permissionid))
      },
      error=> console.log(error)

    )

  }

  selectPermission(permissionId){
    let index = this.permissions.findIndex(permission => permission.pk_permissionid==permissionId)
    this.permissions[index].selected= this.permissions[index].selected?false:true
  }
  selectRolePermission(permissionId){
    let index = this.rolePermissions.findIndex(permission => permission.pk_permissionid==permissionId)
    this.rolePermissions[index].selected= this.rolePermissions[index].selected?false:true
  }

  selectAllPermission(){

    this.selectedAll = this.selectedAll?false:true
    this.permissions.forEach( permission => permission.selected = this.selectedAll?true:false )

  }

  selectAllRolePermission(){
    this.selectedAllRolePermission = this.selectedAllRolePermission?false:true
    this.rolePermissions.forEach( permission => permission.selected = this.selectedAllRolePermission?true:false )
  }



  getRoles(){
    this.roleService.getRole(this.roleId).then(
      (result:Role)=>{
        this.rolePermissions=result.Permissions
        this.rolePermissions.forEach(p=>p.selected=false)
      },
      error=> console.log(error)
    )
  }

  addPermissions(){
    this.permissions.forEach(permission => {
      if(permission.selected){
          this.rolePermissions.push(permission)
          this.roleService.addRolePermission(this.roleId,{'pk_permissionid': permission.pk_permissionid}).then(
            result=>result,
            error=>console.log(error)
          )
        }
    });
    this.permissions = this.permissions.filter(permission => !permission.selected)
  }

  removePermissions(){
    this.rolePermissions.forEach(permission => {
      if(permission.selected){
          this.permissions.push(permission)
          this.roleService.removeRolePermission(this.roleId,{'pk_permissionid': permission.pk_permissionid}).then(
            result=>result,
            error=>console.log(error)
          )
        }
    });
    this.rolePermissions = this.rolePermissions.filter(permission => !permission.selected)
  }

  ngOnInit() {
    this.getRoles()
    this.getPermissions()

  }

}
