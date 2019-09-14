import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {QuestionServiceClient} from '../services/question.service.client';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})

export class CreateQuestionComponent implements OnInit {
  @Input('professorData') public professor;
  @Input('courseData') public courseId;
  @Input('userData') public userId;
  @Input() viewQuestionFunc;
  questions = [];

  @Output() public createQuestionEvent = new EventEmitter();

  constructor(private questionService: QuestionServiceClient) { }

  submitQuestion(QuestionTitle, QuestionContent) {

    const questionObj = {
      title: QuestionTitle,
      content: QuestionContent
    };

    this.questionService
        .createQuestion(this.courseId, this.userId, questionObj)
        .then(questions => this.questions = questions)
        .then(() => this.createQuestionEvent.emit('message'));
  }
  ngOnInit() {
  }
}
