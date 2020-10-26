import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';

import { UserService } from '../services/user.service';

@Component({
  selector: 'sn-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userId: number;
  user: User;
  friends: Array<User>;
  currentFriendPage = 1;
  itemPerPage = 4;
  isEndOfList = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params.userId;
    this.getUserData();
    this.getUserFriends(this.currentFriendPage);
  }

  getUserData() {
    this.userService.getUser(this.userId).subscribe((res: User) => {
      this.user = new User(res);
    });
  }

  getUserFriends(currentFriendPage) {
    this.userService
      .getFriends(this.userId, currentFriendPage, this.itemPerPage)
      .subscribe((res: Array<User>) => {
        if (res.length) {
          this.isEndOfList = false;
          this.friends = res.map((user) => new User(user));
        } else {
          this.isEndOfList = true;
        }
      });
  }

  goToUserProfile(userId) {
    this.userId = userId;
    this.getUserData();
    this.getUserFriends(this.currentFriendPage);
  }
}
