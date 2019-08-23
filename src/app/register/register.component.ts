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
              private userService: UserServiceClient) { }

  register = (name, code1, code2, mail) => {
    if (code1 === code2) {
      const user = {
        username: name,
        password: code1,
        email: mail
      };
      this.userService.register(user)
        .then(response => {
          if (response.status === 200) {
            this.router.navigate(['profile']);
          }
          if (response.status !== 200) {
            const x = document.getElementById('usernameTaken');
            x.style.display = 'block';
            throw new Error('Not 200 response');
          }
        });
    }
    if (code1 !== code2) {
      const x = document.getElementById('passwordWrong');
      x.style.display = 'block';
      throw new Error('Password do not match');
    }
  }

  ngOnInit() {
  }

}
