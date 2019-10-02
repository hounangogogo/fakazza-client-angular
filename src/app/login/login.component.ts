import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  // Login function
  login = (name, code) => {

    // Use the value from input field, and create a user object
    const userObj = {
      username: name,
      password: code
    };

    // Call login function from UserService
    this.userService.login(userObj)
      .then(response => {
        if (response.status === 200) {
          this.router.navigate(['profile']);
        }
        if (response.status !== 200) {
          // Show Error Tag
          const x = document.getElementById('loginError');
          x.style.display = 'block';
          throw new Error('Not 200 response');
        }
      });
  }



  ngOnInit() {
  }

}
