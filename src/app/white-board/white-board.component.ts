import {Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  currentUser = {
    status: undefined
  }
  // navigation bar collapsed
  collapsed = true;

  constructor(private userService: UserServiceClient,
              ) { }

  // Function to manipulate the navigation bar
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  ngOnInit() {
    // Get currentUser from session and set it to currentUser variable
    this.userService.getCurrentUser()
        .then(user => this.currentUser = user)
        .then(() => {
          if (this.currentUser.status === 500) {
            this.userService.loggedin = false;
          } else {
            this.userService.loggedin = true;
          }
        });
  }
}
