/**
 * Created by Bar Saadon on 21/05/2017.
 */
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { User } from '../../_models/index';
import { UserService } from '../../_services/index';
// import { HomeComponent } from '../home/home.component'


@Component({
    selector: 'nav-bar',
    templateUrl:`app/components/navbar/navbar.comp.html`,
    // styleUrls:[`../../../styles.css`]
})

export class navBar implements OnInit {

    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    logoutSystem=() =>{
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
    }

}
