/**
 * Created by Bar Saadon on 26/01/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'pic-user',
    template:`
    <div>
        <img class="pic-user-style" src="../../../assets/images/default-user-image.png"/>
    </div>
`,
    // styleUrls:[`../../../styles.css`],
})
export class PicComponent {
    name: string;

    constructor() {
        // this.name = 'Bar Application Angular 2 !';
    }
}
