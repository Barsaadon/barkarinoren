/**
 * Created by barsaadon on 11/08/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Project } from '../_models/index';

@Injectable()
export class ProjectService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get('/api/projects', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get('/api/projects/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(project: Project) {
    return this.http.post('/api/projects', project, this.jwt()).map((response: Response) => response.json());
  }

  update(project: Project) {
    return this.http.put('/api/projects/' + project.id, project, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete('/api/projects/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentProject = JSON.parse(localStorage.getItem('currentProject'));
    if (currentProject && currentProject.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentProject.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
