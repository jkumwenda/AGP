import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[];

  constructor(
    private userService: UserService
  ) { }

  getUsers() {
    this.userService.getUsers().then(
      (result: User[]) => (this.users = result),
      error => { }
    );
  }

  ngOnInit() {
    this.getUsers();
  }

}
