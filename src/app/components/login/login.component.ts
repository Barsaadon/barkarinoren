/**
 * Created by Bar Saadon on 15/06/2017.
 */

import {Component,Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'login',
  templateUrl:`app/components/login/login.component.html`
})

export class Login{

  @Input() logOnSystem:boolean;
  // @Output() logOnSystem:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.logOnSystem = false;
  }

  loginSystem(){
    this.logOnSystem = true;
  }
}
