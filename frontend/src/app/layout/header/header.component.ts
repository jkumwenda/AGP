import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { PermGuardService } from 'src/app/shared/services/perm-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private username: string;
  public guard: boolean;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private permGuardService: PermGuardService
  ) {}

  permGuard(permission,  profileId) {
    this.permGuardService.getProfileRolePermission(permission, profileId).then((result) => {
      return true;

    }, (error) => {
        return false;
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    // this.permGuard('add-user', 1);
    this.dataService.currentUsername.subscribe((username: string) => {
      this.username = username;
      localStorage.setItem('username', this.username);
    });
  }
}
