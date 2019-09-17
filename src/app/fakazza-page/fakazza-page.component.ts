import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {QuestionServiceClient} from '../services/question.service.client';



@Component({
  selector: 'app-fakazza-page',
  templateUrl: './fakazza-page.component.html',
  styleUrls: ['./fakazza-page.component.css']
})
export class FakazzaPageComponent implements OnInit {
  public userId: string;
  public courseId: string;
  public questions = []
  public professor = {};
  public selectedQuestion = {};
  course = {
    professorId: undefined
  }
  public currentUser = {}

  private loadCourseInfo: boolean;
  private loadCourseMaterial: boolean;
  private loadCreateQuestion: boolean;
  private loadViewQuestion: boolean;



  constructor(private route: ActivatedRoute,
              private courseService: CourseServiceClient,
              private userService: UserServiceClient,
              private questionService: QuestionServiceClient) { }

  loadCourseInfoComponent() {
    this.loadCourseInfo = true;
    this.loadCourseMaterial = false;
    this.loadCreateQuestion = false;
    this.loadViewQuestion = false;
  }

  loadCourseMaterialComponent() {
    this.loadCourseMaterial = true;
    this.loadCourseInfo = false;
    this.loadCreateQuestion = false;
    this.loadViewQuestion = false;
  }

  loadCreateQuestionComponent() {
    this.loadCreateQuestion = true;
    this.loadCourseMaterial = false;
    this.loadCourseInfo = false;
    this.loadViewQuestion = false;
  }

  loadViewQuestionComponent(qid) {
    console.log('This is loadViewQuestionComponent');
    console.log(qid);
    console.log(qid);
    console.log('----------');

    this.questionService.findQuestionById(qid)
        .then(question => this.selectedQuestion = question)
        .then(() => {
          this.loadCreateQuestion = false;
          this.loadCourseMaterial = false;
          this.loadCourseInfo = false;
          this.loadViewQuestion = true;
        });
  }

  updateQuestion(event) {
    this.courseService.getQuestionsForCourse(this.courseId)
        .then(questions => this.questions = questions)
        .then(() => this.loadViewQuestionComponent(this.questions[this.questions.length - 1].id));
  }

  updateQuestionFromDelete(event) {
      this.courseService.getQuestionsForCourse(this.courseId)
          .then(questions => this.questions = questions);
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

    this.courseService.getQuestionsForCourse(this.courseId)
        .then(questions => this.questions = questions);
  }

}
