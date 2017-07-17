"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Bar Saadon on 26/01/2017.
 */
var core_1 = require("@angular/core");
var PicComponent = (function () {
    function PicComponent() {
        // this.name = 'Bar Application Angular 2 !';
    }
    return PicComponent;
}());
PicComponent = __decorate([
    core_1.Component({
        selector: 'pic-user',
        template: "\n    <div>\n        <img class=\"pic-user-style\" src=\"http://www.icaninfotech.com/wp-content/uploads/2015/04/angularjs-development-services.png\"/>\n    </div>\n",
        styleUrls: ["app/style_app/style.css"],
    })
], PicComponent);
exports.PicComponent = PicComponent;
//# sourceMappingURL=pic-user.js.map