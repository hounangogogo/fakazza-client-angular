import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  schools = [];
  courses = [];
  currentUser = {
    id: undefined,
    courses: undefined
  }
  selectedSchool = {
    majors: undefined
  }

  selectedMajor = {
    courses: undefined,
    id: undefined
  }
  selectedCourse = {}



  constructor(private router: Router,
              private userService: UserServiceClient,
              private courseService: CourseServiceClient) { }


  selectSchool = (school) => {
    console.log(school)
    this.selectedSchool = school;
  }

  selectMajor = (major) => {
    let i = 0;
    while (i < this.selectedSchool.majors.length) {
      if (this.selectedSchool.majors[i].name === major) {
        this.selectedMajor = this.selectedSchool.majors[i];
        break;
      } else {
        i = i + 1;
      }
    }
    console.log(this.selectedMajor);

  }

  selectCourse = (course) => {
    let i = 0;
    while (i < this.selectedMajor.courses.length) {
      if (this.selectedMajor.courses[i].name === course) {
        this.selectedCourse = this.selectedMajor.courses[i];
        break;
      } else {
        i = i + 1;
      }
    }
    console.log(this.selectedCourse);
  }

  selectRoll = (roll) => {
    console.log(roll);
    if (roll === 'Professor') {
      const x = document.getElementById('isProfessor');
      x.style.display = 'block';
    }
    if (roll !== 'Professor') {
      const x = document.getElementById('isProfessor');
      x.style.display = 'none';
    }
  }


  // Create Course
  createCourse = (newCourse) => {
    this.userService.createCourse(this.currentUser.id, this.selectedMajor.id, newCourse)
        .then(response => {
          if (response.status === 200) {
            this.router.navigate(['fakazza']);
          }
        });
  }



  // bugs
  enroll = (course) => {
    const userId = this.currentUser.id;
    const courseId = course.id;
    this.courseService.enroll(userId, courseId)
      .then(response => {
        if (response.status === 200) {
          return this.userService.getCourses();
        }
      }).then(() =>  this.router.navigate(['fakazza']));
  }

  ngOnInit() {
    this.userService.getCurrentUser()
      .then(user => this.currentUser = user);

    this.courseService.getSchools()
      .then(schools => this.schools = schools);

    this.userService.getCourses()
        .then(courses => this.courses = courses);
  }
}
