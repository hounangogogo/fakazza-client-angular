import {Injectable} from '@angular/core';


@Injectable()
export class UserServiceClient {

  register = (user) =>
    fetch('http://localhost:8080/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(user)
    })

  login = (user) =>
    fetch('http://localhost:8080/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(user)
    })

  getCurrentUser = () =>
    fetch('http://localhost:8080/getcurrentUser', {
      credentials: 'include'
    }).then(response => response.json())
}
