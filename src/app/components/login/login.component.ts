// /**
//  * Created by Bar Saadon on 15/06/2017.
//  */
//
// import {Component,Input, Output, EventEmitter} from '@angular/core';
//
//
// @Component({
//   selector: 'login',
//   templateUrl:`app/components/login/login.component.html`
// })
//
// export class Login{
//
//   @Input() logOnSystem:boolean;
//   // @Output() logOnSystem:EventEmitter<boolean> = new EventEmitter<boolean>();
//
//   constructor() {
//     this.logOnSystem = false;
//   }
//
//   loginSystem(){
//     this.logOnSystem = true;
//   }
// }


// NEW

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
