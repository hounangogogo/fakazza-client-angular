import {Injectable} from '@angular/core';


@Injectable()
export class UserServiceClient {

  // Register function send the userObj to Spring Server
  register = (userObj) =>
    fetch('http://localhost:8080/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(userObj)
    })


  // Login function send the userObj to Spring Server
  login = (userObj) =>
    fetch('http://localhost:8080/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(userObj)
    })

  // Get the currentUser from session
  getCurrentUser = () =>
    fetch('http://localhost:8080/getcurrentUser', {
      credentials: 'include'
    }).then(response => response.json())
}
