/**
 * Created by Bar Saadon on 15/06/2017.
 */

import {Component} from '@angular/core';

import { Project } from '../../_models/index';
import {ProjectService} from "../../_services/project.service";

@Component({
  selector: 'project-list',
  templateUrl:`app/components/projectList/projectList.component.html`
})

export class projectList {

  // projects = [
  //   {'ProjectName': 'Angular Project'},
  //   {'ProjectName': 'c# Project'},
  //   {'ProjectName': 'Data Mining Project'},
  //   {'ProjectName': 'Cyber Security Project'},
  //   {'ProjectName': 'Management Analytic Project'},
  //   {'ProjectName': 'Cyber Shield'}
  // ];
  //
  // constructor() {
  //
  // }

  // NEW
  currentProject: Project;
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    this.currentProject = JSON.parse(localStorage.getItem('currentProject'));
  }

  ngOnInit() {
    this.loadAllProjects();
  }

  deleteProject(id: number) {
    this.projectService.delete(id).subscribe(() => { this.loadAllProjects() });
  }

  private loadAllProjects() {
    this.projectService.getAll().subscribe(projects => { this.projects = projects; });
  }
}
