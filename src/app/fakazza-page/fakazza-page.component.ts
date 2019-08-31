import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-fakazza-page',
  templateUrl: './fakazza-page.component.html',
  styleUrls: ['./fakazza-page.component.css']
})
export class FakazzaPageComponent implements OnInit {
  userId: string;
  courseId: string;
  course = {}


  constructor(private route: ActivatedRoute,
              private courseService: CourseServiceClient) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('uid');
    this.courseId = this.route.snapshot.paramMap.get('cid');
    this.courseService.getCourseById(this.courseId)
        .then(course => this.course = course);
  }

}
