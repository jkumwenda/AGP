import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { PermGuardService } from 'src/app/shared/services/perm-guard.service';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private username: string;
  private name: string;
  private email: string;
  private profileID: string;
  public guard: boolean;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private permGuardService: PermGuardService
  ) {
    this.username = localStorage.getItem('username');
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
    this.profileID = localStorage.getItem('profileID');
  }

  permGuard(permission,  profileID) {
    this.permGuardService.getProfileRolePermission(permission, profileID).then((result) => {
    console.log("TCL: HeaderComponent -> permGuard -> result", result);
      return true
    }, (error) => {
        return false;
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.permGuard('add-user', this.profileID);
    this.dataService.currentUsername.subscribe((username: string) => {
      // this.username = username;
    });
  }
}
