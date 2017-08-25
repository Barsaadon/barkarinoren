/**
 * Created by Bar Saadon on 23/01/2017.
 */
import {Component, Output, EventEmitter} from '@angular/core';
import { Project } from '../../_models/index';
import {ProjectService} from "../../_services/project.service";


@Component({
    selector: 'left-component',
    templateUrl:`app/components/leftComponent/left-component.html`,
    styleUrls:[`../../app.component.css`]
})

export class LeftComponent {

    //projects
  name: string;
  projects: Project[] = [];

  users = [
    {'userName' : 'Bar Saadon'},
    {'userName' : 'Karin Sharoni'},
    {'userName' : 'Oren Yalo'},
    {'userName' : 'Bar SA'},
    {'userName' : 'Karin SA'},
    {'userName' : 'Oren SA'},
  ];

   // @Output() studentClicked = new EventEmitter();
    thisProject  = this.projects[0];
    public projectClicked = false;


  constructor(private projectService: ProjectService) {}

  clickOnProject(std:any){
        console.log('CLICKED!!');
        this.thisProject=std;
        // this.projectClicked = !this.projectClicked;
      this.projectClicked = true;
  }


    ClickDeleteStudent(){
        this.projectClicked = false;
        // this.students[];

        console.debug('DELETE!!');
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



/*
 project ideas:
 on left of project list, list of all names
 when click on "friends list", list of friends on project
 when click on friend, details popup and then option to send prompt message
 task list on right will sppear only after project selected.
 available to remove task and project with a popup "are u sure?""
 when click on "on it" btn, timer will appear next to btn and btn will turn green with "done" written on it
 top of page: login details "hello ____" and sign out option.
 when task done, and click "done", the task will be crossed out
 when all tasks done in project, a check V will appear next to project. or color green while others are red.
 maybe a dialogue box getting messages from other contacts via friends list + prompt.
 and also available to send messages to other contacts to their message box when sending prompt.
 the message dialogue box will be scrollable, fixed pixals, under friends list btn.
 */
