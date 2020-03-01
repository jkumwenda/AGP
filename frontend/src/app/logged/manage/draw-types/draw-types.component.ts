import { Component, OnInit } from '@angular/core';
import { DrawType } from '../../../shared/interfaces/draw-type';
import { Router } from '@angular/router';
import { DrawTypeService } from '../../../shared/services/draw-type.service';
import {PermissionCheckService} from '../../../shared/services/permission-check.service';

@Component({
  selector: 'app-draw-types',
  templateUrl: './draw-types.component.html',
  styleUrls: ['./draw-types.component.css']
})
export class DrawTypesComponent implements OnInit {
  moduleTitle = 'Draw Type';
  public drawTypes: DrawType[];
  public permissionCodes = ['addDrawType', 'viewDrawType', 'editDrawType', 'deleteDrawType'];
  public loggedProfile = 2;
  public profilePermissions: string[] = [];

  constructor(
    private drawTypeService: DrawTypeService,
    private permissionCheckService: PermissionCheckService,
    private router: Router,
  ) { }

  getDrawTypes() {
    this.drawTypeService.getDrawTypes().then((result) => {
      this.drawTypes = result as DrawType[];
    }, (error) => {
    });
  }

  checkIfEmpty(){
    return Array.isArray(this.drawTypes) && this.drawTypes.length
  }

  editDrawType(drawTypeId) {
    this.router.navigate(['/manage/edit-draw-type', drawTypeId]);
  }

  deleteDrawType(drawTypeId) {
    this.drawTypeService.deleteDrawType(drawTypeId).then((result) => {
      this.getDrawTypes();
    }, (error) => {
    });
  }
  checkPermissions() {
    this.permissionCheckService.permissionCheck(this.loggedProfile, this.permissionCodes).then(
      (result: string[]) => this.profilePermissions = result,
      (error) => console.log(error)
    );
  }

  checkIfPermitted(code) {
    return this.profilePermissions.find(item => item === code);
  }
  ngOnInit() {
    this.getDrawTypes();
    this.checkPermissions();
  }
}
