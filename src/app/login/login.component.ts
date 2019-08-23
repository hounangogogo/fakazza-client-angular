import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor() { }

  login = (name, code) => {
    const user = {
      username: name,
      password: code
    };
    console.log(user);
  }
  ngOnInit() {
  }

}
