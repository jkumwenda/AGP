import { Component, OnInit } from '@angular/core';
import { Format } from '../../../shared/interfaces/format';
import { Router } from '@angular/router';
import { FormatService } from '../../../shared/services/format.service';
import {PermissionCheckService} from '../../../shared/services/permission-check.service';

@Component({
  selector: 'app-formats',
  templateUrl: './formats.component.html',
  styleUrls: ['./formats.component.css']
})
export class FormatsComponent implements OnInit {
  moduleTitle = 'Format';
  public formats: Format[];
  public permissionCodes = ['addFormat', 'viewFormat', 'editFormat', 'deleteFormat'];
  public loggedProfile = 2;
  public profilePermissions: string[] = [];

  constructor(
    private formatService: FormatService,
    private permissionCheckService: PermissionCheckService,
    private router: Router,
  ) { }

  getFormats() {
    this.formatService.getFormats().then((result) => {
      this.formats = result as Format[];
    }, (error) => {
    });
  }

  checkIfEmpty(){
    return Array.isArray(this.formats) && this.formats.length
  }

  editFormat(formatId) {
    this.router.navigate(['/manage/edit-format', formatId]);
  }

  deleteFormat(formatId) {
    this.formatService.deleteFormat(formatId).then((result) => {
      this.getFormats();
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
    this.getFormats();
    this.checkPermissions();
  }
}
