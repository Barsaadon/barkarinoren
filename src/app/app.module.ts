import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routes';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


import { AppComponent } from './app.component';
import { LeftComponent } from './components/leftComponent/left-component';
import { RightComponent } from './components/rightComponent/right-component';
import { PicComponent } from './components/picUser/pic-user';
import { navBar } from './components/navbar/navbar.comp';
// import { Home } from './components/home/home.component';
// import { HomeComponent } from './components/home/home.component';
import { InsertUser } from './components/insertUser/insertUser.component';
import { InsertProject } from './components/InsertProject/InsertProject.component';
import { projectList } from './components/projectList/projectList.component';
import { usersList } from './components/usersList/usersList.component';
// import { Login } from './components/login/login.component';
import { workingDay } from './components/workingDay/workingDay.component';
import { Footer } from './components/footer/footer.component';
import { ProfileUser } from './components/profileUser/profileUser.component';

import { AlertComponent } from './_directive/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, ProjectService } from './_services/index';
import { HomeComponent } from './components/home/index';
import { LoginComponent } from './components/login/index';
import { RegisterComponent } from './components/register/index';
import { AddProjectComponent } from './components/addProject/index';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    PicComponent,
    navBar,
    // Home,
    HomeComponent,
    InsertUser,
    InsertProject,
    projectList,
    usersList,
    // Login,
    workingDay,
    Footer,
    ProfileUser,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [
    appRoutingProviders,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    ProjectService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
