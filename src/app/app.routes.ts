/**
 * Created by Bar Saadon on 09/06/2017.
 */
//import { NgModule }      from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// import { LeftComponent } from './components/leftComponent/left-component';
// import { RightComponent } from './components/rightComponent/right-component';
import { Home } from './components/home/home.component';
import { InsertUser } from './components/insertUser/insertUser.component';
import { InsertProject } from './components/InsertProject/InsertProject.component';
import { projectList } from './components/projectList/projectList.component';
import { usersList } from './components/usersList/usersList.component';
import { Login } from './components/login/login.component';
import { workingDay } from './components/workingDay/workingDay.component';
import {ProfileUser} from "./components/profileUser/profileUser.component";


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'insert-user', component: InsertUser },
    { path: 'insert-project', component: InsertProject },
    { path: 'project-list', component: projectList },
    { path: 'users-list', component: usersList },
    { path: 'login', component: Login },
    { path: 'working-day', component: workingDay },
    { path: 'profile-user', component: ProfileUser }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);


