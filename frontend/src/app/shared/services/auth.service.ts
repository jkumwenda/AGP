import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class AuthService {

  private httpOptions: any;
  public token: string;
  public tokenExpires: Date;
  public username: string;
  public firstname: string;
  public lastname: string;
  public errors: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngxService: NgxUiLoaderService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  public login(user) {
    this.ngxService.start();
    this.http.post(API_URL + 'auth-jwt/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        this.ngxService.stop();
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.errors = err('error');
        this.ngxService.stop();
      }
    );
  }

  public refreshToken() {
    this.http.post(API_URL + 'auth-jwt-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
      },
      err => {
        this.errors = err('error');
      }
    );
  }

  public logout() {
    this.token = null;
    this.tokenExpires = null;
    this.username = null;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public isAuthenticated() {
    return this.token != null;
  }

  public decode() {
    const Role = 'Admin';
    return Role;
  }

  private updateData(token) {
    this.token = token;
    this.errors = [];
    localStorage.setItem('token', this.token);

    const tokenParts = this.token.split(/\./);
    const tokenDecoded = JSON.parse(window.atob(tokenParts[1]));
    this.tokenExpires = new Date(tokenDecoded.exp * 1000);
    this.username = tokenDecoded.username;
    localStorage.setItem('username', this.username);
  }
}
