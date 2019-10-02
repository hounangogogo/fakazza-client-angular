import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

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
