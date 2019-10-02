import {Injectable} from '@angular/core';


@Injectable()
export class UserServiceClient {

    // Register function send the userObj to Spring Server
    register = (userObj) =>
        fetch('http://localhost:8080/api/register', {
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
        fetch('http://localhost:8080/api/login', {
            method: 'post',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            },
            body: JSON.stringify(userObj)
        })

    // Get the currentUser from session in Spring Server
    getCurrentUser = () =>
        fetch('http://localhost:8080/api/getCurrentUser', {
            credentials: 'include'
        }).then(response => response.json())



    getEnrolledCourses = () =>
        fetch('http://localhost:8080/api/getEnrolledCourses', {
            method: 'get',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            }
        }).then(response => response.json())


    getUserById = (userId) =>
        fetch('http://localhost:8080/api/getUserById/' + userId, {
            method: 'get',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            }
        }).then(response => response.json())
}
