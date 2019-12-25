import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public token: any;
  public httpHeaders: any;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private ngxService: NgxUiLoaderService
    ) {

    this.token = localStorage.getItem('token');
    this.httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       // Authorization: 'Bearer ' + 'http://shanalikhan.github.io/2017/02/19/Option-to-ignore-settings-folders-code-settings-sync.html'
      })
    };
  }

  post(endpoint, data) {
    // this.ngxService.start();
    return new Promise((resolve, reject) => {
      this.http.post(API_URL + endpoint, JSON.stringify(data), this.httpHeaders).subscribe(result => {
        // this.ngxService.stop();
        resolve(result);
      }, (error) => {
          // this.ngxService.stop();
          reject(error);
      });
    });
  }

  get(endpoint) {
    // this.ngxService.start();
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + endpoint, this.httpHeaders).subscribe(result => {
        // this.ngxService.stop();
        resolve(result);
      }, (error) => {
          // this.ngxService.stop();
          reject(error);
      });
    });
  }

  update(endpoint, data) {
    // this.ngxService.start();
    return new Promise((resolve, reject) => {
      this.http.patch(API_URL + endpoint, JSON.stringify(data), this.httpHeaders).subscribe(result => {
        // this.ngxService.stop();
        resolve(result);
      }, (error) => {
          // this.ngxService.stop();
          reject(error);
      });
    });
  }

  delete(endpoint) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: 'Do you confirm the deletion of this data?'
    });
    return new Promise((resolve, reject) => {
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // this.ngxService.start();
          this.http.delete(API_URL + endpoint, this.httpHeaders).subscribe(result => {
            // this.ngxService.stop();
            resolve(result);
          }, (error) => {
              // this.ngxService.start();
              reject(error);
          });
        }
      });
    });
  }

}
