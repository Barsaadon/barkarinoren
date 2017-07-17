/**
 * Created by Bar Saadon on 16/06/2017.
 */

import {Component} from '@angular/core';


@Component({
  selector: 'profile-user',
  templateUrl:`app/components/profileUser/profileUser.component.html`,
  // styleUrls:[`../../../styles.css`]
})

export class ProfileUser {
  constructor() {

  }

  changePicture(){
    alert("You can't change this pic")
  }

}
