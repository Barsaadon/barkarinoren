/**
 * Created by barsaadon on 11/08/2017.
 */
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: Http,
  useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
    // array in local storage for registered users
    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    let projects: any[] = JSON.parse(localStorage.getItem('projects')) || [];

    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
      console.log('connection.request.url: ', connection.request.url);
      // wrap in timeout to simulate server api call
      setTimeout(() => {

        // authenticate
        if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
          // get parameters from post request
          let params = JSON.parse(connection.request.getBody());

          // find if any user matches login credentials
          let filteredUsers = users.filter(user => {
            return user.username === params.username && user.password === params.password;
          });

          if (filteredUsers.length) {
            // if login details are valid return 200 OK with user details and fake jwt token
            let user = filteredUsers[0];
            connection.mockRespond(new Response(new ResponseOptions({
              status: 200,
              body: {
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                isAdmin: user.isAdmin,
                token: 'fake-jwt-token'
              }
            })));
          } else {
            // else return 400 bad request
            connection.mockError(new Error('Username or password is incorrect'));
          }
        }

        // get users
        if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
          // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
          if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: users })));
          } else {
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
          }
        }

        // get user by id
        if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Get) {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            // find user by id in users array
            let urlParts = connection.request.url.split('/');
            let id = parseInt(urlParts[urlParts.length - 1]);
            let matchedUsers = users.filter(user => { return user.id === id; });
            let user = matchedUsers.length ? matchedUsers[0] : null;

            // respond 200 OK with user
            connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: user })));
          } else {
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
          }
        }

        // create user
        if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Post) {
          // get new user object from post body
          let newUser = JSON.parse(connection.request.getBody());

          // validation
          let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
          if (duplicateUser) {
            return connection.mockError(new Error('Username "' + newUser.username + '" is already taken'));
          }

          // save new user
          newUser.id = users.length + 1;
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));

          // respond 200 OK
          connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
        }

        // delete user
        if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Delete) {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            // find user by id in users array
            let urlParts = connection.request.url.split('/');
            let id = parseInt(urlParts[urlParts.length - 1]);
            for (let i = 0; i < users.length; i++) {
              let user = users[i];
              if (user.id === id) {
                // delete user
                users.splice(i, 1);
                localStorage.setItem('users', JSON.stringify(users));
                break;
              }
            }

            // respond 200 OK
            connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
          } else {
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
          }
        }
        //
        // console.log('connection.request.url: ', connection.request.url);
        //   // get parameters from post request
        //   let params = JSON.parse(connection.request.getBody());
        //
        //   // find if any user matches login credentials
        //   let filteredProjects = projects.filter(project => {
        //     return project.projectName === params.projectName;
        //   });
        //
        //   let project = filteredProjects[0];
        //   connection.mockRespond(new Response(new ResponseOptions({
        //     status: 200,
        //     body: {
        //       id: project.id,
        //       projectsname: project.projectName,
        //       // firstName: user.firstName,
        //       // lastName: user.lastName,
        //       token: 'fake-jwt-token-project'
        //     }
        //   })));



        // get projects
        console.log('connection.request.url: ', connection.request.url);
        if (connection.request.url.endsWith('/api/projects') && connection.request.method === RequestMethod.Get) {
          // console.log('here');
          // check for fake auth token in header and return projects if valid, this security is implemented server side in a real application
          // if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token-project') {
          //   console.log('there');
            connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: projects })));
          // } else {
          //   console.log('foooooo');
          //   // return 401 not authorised if token is null or invalid
          //   connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
          // }
        }

        // get project by id
        if (connection.request.url.match(/\/api\/projects\/\d+$/) && connection.request.method === RequestMethod.Get) {
          // check for fake auth token in header and return project if valid, this security is implemented server side in a real application
          if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token-project') {
            // find project by id in projects array
            console.log("get peoject by id IFFFF");
            let urlParts = connection.request.url.split('/');
            let id = parseInt(urlParts[urlParts.length - 1]);
            let matchedProjects = projects.filter(project => { return project.id === id; });
            let project = matchedProjects.length ? matchedProjects[0] : null;

            // respond 200 OK with project
            connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: project })));
          } else {
            console.log("get peoject by id ELSEEEEE");
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
          }
        }

        // create project
        if (connection.request.url.endsWith('/api/projects') && connection.request.method === RequestMethod.Post) {
          // get new project object from post body
          let newProject = JSON.parse(connection.request.getBody());

          // validation
          let duplicateProject = projects.filter(projects => { return projects.projectName === newProject.projectName; }).length;
          if (duplicateProject) {
            return connection.mockError(new Error('ProjectName "' + newProject.projectName + '" is already taken'));
          }

          // save new project
          newProject.id = projects.length + 1;
          projects.push(newProject);
          localStorage.setItem('projects', JSON.stringify(projects));

          // respond 200 OK
          connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
        }

        // delete project
        if (connection.request.url.match(/\/api\/projects\/\d+$/) && connection.request.method === RequestMethod.Delete) {
          // check for fake auth token in header and return project if valid, this security is implemented server side in a real application
          console.log("project delete");
          // if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token-project') {
            // find project by id in projects array
            console.log("project delete IFFF");
            let urlParts = connection.request.url.split('/');
            let id = parseInt(urlParts[urlParts.length - 1]);
            for (let i = 0; i < projects.length; i++) {
              console.log("project delete FORRRR");
              let project = projects[i];
              if (project.id === id) {
                // delete project
                projects.splice(i, 1);
                localStorage.setItem('projects', JSON.stringify(projects));
                break;
              }
            }

            // respond 200 OK
            connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
          // } else {
            console.log("project delete ELSEEEE");
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
          // }
        }



      }, 500);

    });

    return new Http(backend, options);
  },
  deps: [MockBackend, BaseRequestOptions]
};
