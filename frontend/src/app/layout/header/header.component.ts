import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  private username: string;

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) {}

  Test(test) {
    return false;
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.dataService.currentUsername.subscribe((username: string) => {
      this.username = username;
      localStorage.setItem("username", this.username);
    });
  }
}
