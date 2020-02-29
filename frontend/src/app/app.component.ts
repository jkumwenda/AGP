import { Component } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
  ) { 
  }
}