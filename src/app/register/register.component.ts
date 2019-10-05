import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  password2: string;
  email: string;

  constructor(private router: Router,
              private userService: UserServiceClient) {}

  // Function for register a user
  register = (name, code1, code2, mail) => {
    // Check the password1 and password2 are the same or not
    if (code1 === code2) {

      // if password1 and password2 match, create userObject and sent it to UserService
      const userObj = {
        username: name,
        password: code1,
        email: mail
      };

      // call register function from UserService
      this.userService.register(userObj)
        .then(response => {
          if (response.status === 200) {
            this.userService.loggedin = true;
            this.router.navigate(['profile']);
          }
          if (response.status !== 200) {
            const x = document.getElementById('usernameTaken');
            x.style.display = 'block';
            throw new Error('Not 200 response');
          }
        });
    }
    // if password1 and password2 do not match
    if (code1 !== code2) {
      const x = document.getElementById('passwordWrong');
      x.style.display = 'block';
      throw new Error('Password do not match');
    }
  }

  ngOnInit() {
  }

}
