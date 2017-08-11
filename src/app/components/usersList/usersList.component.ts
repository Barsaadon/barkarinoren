/**
 * Created by Bar Saadon on 15/06/2017.
 */

import {Component} from '@angular/core';


@Component({
  selector: 'users-list',
  templateUrl:`app/components/usersList/usersList.component.html`
})

export class usersList {

  _userName: string;

  users = [
    {
      'userName' : 'Bar Saadon',
      'role' : 'Administrator'
    },
    {
      'userName' : 'Karin Sharoni',
      'role' : 'Administrator'
    },
    {
      'userName' : 'Oren Yalo',
      'role' : 'Administrator'
    },
    {
      'userName' : 'Bar SA',
      'role' : 'Subscriber'
    },
    {
      'userName' : 'Karin SA',
      'role' : 'Subscriber'
    },
    {
      'userName' : 'Oren SA',
      'role' : 'Subscriber'
    },
  ];

  constructor() {
    this._userName = "Bar Saadon";
  }

}
