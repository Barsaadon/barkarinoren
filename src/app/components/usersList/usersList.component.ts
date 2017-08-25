/**
 * Created by Bar Saadon on 15/06/2017.
 */

import {Component} from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';


@Component({
  selector: 'users-list',
  templateUrl:`app/components/usersList/usersList.component.html`
})

export class usersList {

  // NEW
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }
}
