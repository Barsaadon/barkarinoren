import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { LeftComponent } from './components/leftComponent/left-component';
import { RightComponent } from './components/rightComponent/right-component';
import { PicComponent } from './components/picUser/pic-user';
import { navBar } from './components/navbar/navbar.comp';
import { Home } from './components/home/home.component';
import { InsertUser } from './components/insertUser/insertUser.component';
import { InsertProject } from './components/InsertProject/InsertProject.component';
import { projectList } from './components/projectList/projectList.component';
import { usersList } from './components/usersList/usersList.component';
import { Login } from './components/login/login.component';
import { workingDay } from './components/workingDay/workingDay.component';
import { Footer } from './components/footer/footer.component';
import { ProfileUser } from './components/profileUser/profileUser.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    PicComponent,
    navBar,
    Home,
    InsertUser,
    InsertProject,
    projectList,
    usersList,
    Login,
    workingDay,
    Footer,
    ProfileUser
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
