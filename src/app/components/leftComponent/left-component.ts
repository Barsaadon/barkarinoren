/**
 * Created by Bar Saadon on 23/01/2017.
 */
import {Component, Output, EventEmitter} from '@angular/core';
import { IStudent } from '../../components/leftComponent/student';
import {$} from "protractor";

// import classElement = ts.ScriptElementKind.classElement;
// import removeItemFromSet = ts.server.removeItemFromSet;
// import {StudentProfile} from  '../studentProfileComp/student-profile-comp';

@Component({
    selector: 'left-component',
    templateUrl:`app/components/leftComponent/left-component.html`,
    styleUrls:[`../../app.component.css`]
    // directives: [StudentProfile]
})

export class LeftComponent {

    //projects
    name: string;

    // Pname : string;
    // projectNum: number;
    // days_to_finish: number;
    // department_city: string;

    students: IStudent[] = [
        {
            "Pname": "Design",
            "projectNum": 111,
            "days_to_finish": 25,
            "department_city": "Netanya"
        },
        {
            "Pname": "Build",
            "projectNum": 222,
            "days_to_finish":  12,
            "department_city": "Netanya"
        },
        {
            "Pname": "Code",
            "projectNum": 333,
            "days_to_finish": 22,
            "department_city": "Raanana"
        },
        {
            "Pname": "Engineering",
            "projectNum": 444,
            "days_to_finish": 30,
            "department_city": "Haifa"
        }
    ];

  users = [
    {'userName' : 'Bar Saadon'},
    {'userName' : 'Karin Sharoni'},
    {'userName' : 'Oren Yalo'},
    {'userName' : 'Bar SA'},
    {'userName' : 'Karin SA'},
    {'userName' : 'Oren SA'},
  ];


    thisStudent  = this.students[0];
    // @Output() studentClicked = new EventEmitter();
    public studentClicked = false;


  constructor() {
        // this.name = 'Bar Saadon';
    }

    // public studentClicked = false;


    ClickStudent(std:any){
        console.debug('CLICKED!!');
        this.thisStudent=std;
        this.studentClicked = !this.studentClicked;
    }

    // openFriends(std:any){
    //    alert("Friends List: Karin 0541111111, Bar 0542222222, Oren 0543333333");
    //    prompt("type question for friend");  //question may be sent to contact selected from list above.
    // }


    ClickDeleteStudent(){
        this.studentClicked = false;
        // this.students[];

        console.debug('DELETE!!');
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
