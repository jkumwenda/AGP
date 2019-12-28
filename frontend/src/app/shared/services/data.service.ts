import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private getUsername = new BehaviorSubject('');
  currentUsername = this.getUsername.asObservable();

  constructor() { }

  updateUsername(username: string) {
    this.getUsername.next(username);
  }
}
