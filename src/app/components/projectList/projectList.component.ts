/**
 * Created by Bar Saadon on 15/06/2017.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'project-list',
  templateUrl:`app/components/projectList/projectList.component.html`
})

export class projectList {

  projects = [
    {'ProjectName': 'Angular Project'},
    {'ProjectName': 'c# Project'},
    {'ProjectName': 'Data Mining Project'},
    {'ProjectName': 'Cyber Security Project'},
    {'ProjectName': 'Management Analytic Project'},
    {'ProjectName': 'Cyber Shield'}
  ];

  constructor() {

  }

}
