import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  @Input('parentData') public professor;


  constructor() { }



  ngOnInit() {
  }

}
