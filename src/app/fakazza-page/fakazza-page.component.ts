import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-fakazza-page',
  templateUrl: './fakazza-page.component.html',
  styleUrls: ['./fakazza-page.component.css']
})
export class FakazzaPageComponent implements OnInit {
  userId: string;
  public courseId: string;
  course = {
    professorId: undefined
  }
  currentUser = {}
  public professor = {}
  private loadCourseInfo: boolean;


  constructor(private route: ActivatedRoute,
              private courseService: CourseServiceClient,
              private userService: UserServiceClient) { }


  loadCourseInfoComponent() {
    this.loadCourseInfo = true;
  }



  ngOnInit() {
    // ---------- Get userId and courseId from URL ----------
    this.userId = this.route.snapshot.paramMap.get('uid');
    this.courseId = this.route.snapshot.paramMap.get('cid');

    // ---------- Services Functions ----------
    this.courseService.getCourseById(this.courseId)
        .then(course => this.course = course)
        .then(() => this.userService.getUserById(this.course.professorId)
            .then(professor => this.professor = professor));
    this.userService.getUserById(this.userId)
        .then(user => this.currentUser = user);
  }

}
