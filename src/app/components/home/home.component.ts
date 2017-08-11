// /**
//  * Created by Bar Saadon on 09/06/2017.
//  */
//
// import {Component} from '@angular/core';
//
//
// @Component({
//     selector: 'home',
//     templateUrl:`app/components/home/home.component.html`,
//     // styleUrls:[`../../../styles.css`]
// })
//
// export class Home {
//     constructor() {
//
//     }
//
// }


// NEW

import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
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

  logoutSystem=() =>{
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }
}
