import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  @Input('professorData') public professor;
  @Input('courseData') public courseId;

  constructor() { }



  ngOnInit() {
  }

}
