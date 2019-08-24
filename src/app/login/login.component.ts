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

  login = (name, code) => {
    const user = {
      username: name,
      password: code
    };

    this.userService.login(user)
      .then(response => {
        if (response.status === 200) {
          this.router.navigate(['profile']);
        }
        if (response.status !== 200) {
          const x = document.getElementById('loginError');
          x.style.display = 'block';
          throw new Error('Not 200 response');
        }
      });
  }
  ngOnInit() {
  }

}
