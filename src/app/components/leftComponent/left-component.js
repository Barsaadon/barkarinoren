"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Bar Saadon on 23/01/2017.
 */
var core_1 = require("@angular/core");
// import classElement = ts.ScriptElementKind.classElement;
// import removeItemFromSet = ts.server.removeItemFromSet;
// import {StudentProfile} from  '../studentProfileComp/student-profile-comp';
var LeftComponent = (function () {
    function LeftComponent() {
        // Pname : string;
        // projectNum: number;
        // days_to_finish: number;
        // department_city: string;
        this.students = [
            {
                "Pname": "Project1- Design",
                "projectNum": 111,
                "days_to_finish": 25,
                "department_city": "Netanya",
            },
            {
                "Pname": "project2- Build",
                "projectNum": 222,
                "days_to_finish": 12,
                "department_city": "Netanya",
            },
            {
                "Pname": "project3- Code",
                "projectNum": 333,
                "days_to_finish": 22,
                "department_city": "Raanana"
            },
            {
                "Pname": "project4- Engineering",
                "projectNum": 444,
                "days_to_finish": 30,
                "department_city": "Haifa"
            }
        ];
        this.thisStudent = this.students[0];
        // @Output() studentClicked = new EventEmitter();
        this.studentClicked = false;
        // this.name = 'Bar Saadon';
    }
    // public studentClicked = false;
    LeftComponent.prototype.ClickStudent = function (std) {
        console.debug('CLICKED!!');
        this.thisStudent = std;
        this.studentClicked = !this.studentClicked;
    };
    LeftComponent.prototype.openFriends = function (std) {
        alert("Friends List: Karin 0541111111, Bar 0542222222, Oren 0543333333");
        prompt("type question for friend"); //question may be sent to contact selected from list above.    
    };
    LeftComponent.prototype.ClickDeleteStudent = function () {
        this.studentClicked = false;
        // this.students[];
        console.debug('DELETE!!');
    };
    return LeftComponent;
}());
LeftComponent = __decorate([
    core_1.Component({
        selector: 'left-component',
        templateUrl: "app/components/leftComponent/left-component.html",
        styleUrls: ["app/style_app/style.css"],
    })
], LeftComponent);
exports.LeftComponent = LeftComponent;
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
//# sourceMappingURL=left-component.js.map