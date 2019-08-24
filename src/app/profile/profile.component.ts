import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser = {}
  constructor(private userService: UserServiceClient) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .then(user => this.currentUser = user);
  }

}
