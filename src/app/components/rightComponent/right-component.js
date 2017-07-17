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
var RightComponent = (function () {
    function RightComponent() {
        this.cssOnitOn = true;
        this.courses = [
            { 'name': 'task1: build', 'id': '1' },
            { 'name': 'task2: Report', 'id': '2' },
            { 'name': 'task3: Overview', 'id': '3' },
            { 'name': 'task4: Dwell', 'id': '4' },
            { 'name': 'task5: Control', 'id': '5' },
            { 'name': 'task6: Operate', 'id': '6' }
        ];
        this.thisCourse = this.courses[0];
        this.courseClicked = false;
        // this.name = 'Course Name List';
        this.onitStatus = "ONIT";
    }
    RightComponent.prototype.ClickCourse = function (std) {
        console.debug('CLICKED!!');
        this.thisCourse = std;
        this.courseClicked = !this.courseClicked;
    };
    RightComponent.prototype.onClick = function (deleteCourse) {
        console.debug('DELETE BTN');
        this.courseClicked = false;
    };
    RightComponent.prototype.startStop = function () {
        if (this.onitStatus = "ONIT") {
            this.onitStatus = "ON WORK";
            this.cssOnitOn = false;
        }
        else {
            this.onitStatus = "ONIT";
            this.cssOnitOn = true;
        }
    };
    RightComponent.prototype.onit_clicked = function () {
        alert("'On It' clicked + timer on");
        //change label to DONE and color to GREEN, add timer
    };
    return RightComponent;
}());
RightComponent = __decorate([
    core_1.Component({
        selector: 'right-component',
        templateUrl: "app/components/rightComponent/right-component.html",
        styleUrls: ["app/style_app/style.css"],
    })
], RightComponent);
exports.RightComponent = RightComponent;
//# sourceMappingURL=right-component.js.map