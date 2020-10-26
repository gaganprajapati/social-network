import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'sn-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  page = 1;
  count = 5;
  users: Array<User> = [];
  isEndOfList = true;

  constructor(private route: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers(this.page);
  }

  getUsers(pageNumber) {
    this.userService.getUsers(pageNumber, this.count).subscribe(
      (res: Array<User>) => {
        if (res.length) {
          this.isEndOfList = false;
          this.users = res.map((user) => new User(user));
        } else {
          this.isEndOfList = true;
        }
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  goToUserProfile(userId) {
    this.route.navigate(['/', 'user', userId]);
  }
}
