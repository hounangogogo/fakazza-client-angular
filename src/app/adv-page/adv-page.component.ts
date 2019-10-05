import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-adv-page',
  templateUrl: './adv-page.component.html',
  styleUrls: ['./adv-page.component.css']
})
export class AdvPageComponent implements OnInit {
    // navigation bar collapsed
    collapsed = true;

    constructor() { }


  // Function to manipulate the navigation bar
    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

  ngOnInit() {

  }

}
