/**
 * Created by Bar Saadon on 15/06/2017.
 */

import {Component} from '@angular/core';


@Component({
  selector: 'users-list',
  templateUrl:`app/components/usersList/usersList.component.html`
})

export class usersList {

  users = [
    {'userName' : 'Bar Saadon'},
    {'userName' : 'Karin Sharoni'},
    {'userName' : 'Oren Yalo'},
    {'userName' : 'Bar SA'},
    {'userName' : 'Karin SA'},
    {'userName' : 'Oren SA'},
  ];

  constructor() {

  }

}
