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

  // _userName: string;
  //
  // users = [
  //   {
  //     'userName' : 'Bar Saadon',
  //     'role' : 'Administrator'
  //   },
  //   {
  //     'userName' : 'Karin Sharoni',
  //     'role' : 'Administrator'
  //   },
  //   {
  //     'userName' : 'Oren Yalo',
  //     'role' : 'Administrator'
  //   },
  //   {
  //     'userName' : 'Bar SA',
  //     'role' : 'Subscriber'
  //   },
  //   {
  //     'userName' : 'Karin SA',
  //     'role' : 'Subscriber'
  //   },
  //   {
  //     'userName' : 'Oren SA',
  //     'role' : 'Subscriber'
  //   },
  // ];
  //
  // constructor() {
  //   this._userName = "Bar Saadon";
  // }


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
