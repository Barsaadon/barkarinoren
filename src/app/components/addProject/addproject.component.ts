/**
 * Created by barsaadon on 11/08/2017.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../../_services/index';
import {ProjectService} from "../../_services/project.service";

@Component({
  selector: 'addproject-comp',
  moduleId: module.id,
  templateUrl: 'addproject.component.html'
})

export class AddProjectComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private alertService: AlertService) { }

  registerProject() {
    this.loading = true;
    this.projectService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/project-list']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
          alert("ERROR");
        });
  }
}
