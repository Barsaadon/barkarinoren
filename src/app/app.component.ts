import { Component, Input } from '@angular/core';
// import {Login} from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  // logOn: boolean;

  @Input()logOn: boolean;

  constructor(){
    this.title = "My App";
    // this.logOn = false;
  }
}
