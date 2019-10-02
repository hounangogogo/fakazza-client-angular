import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {QuestionServiceClient} from '../services/question.service.client';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})

export class CreateQuestionComponent implements OnInit {

  // ----- Inject contents from parent Fakazza page -----
  @Input('professorData') public professor;
  @Input('courseData') public courseId;
  @Input('userData') public userId;
  @Input() viewQuestionFunc;

  // Deject method to parent Fakazza page
  @Output() public createQuestionEvent = new EventEmitter();

  questions = [];


  constructor(private questionService: QuestionServiceClient) { }

  // ----- After enter the question data submit to Java Server -----
  submitQuestion(QuestionTitle, QuestionContent) {

    const questionObj = {
      title: QuestionTitle,
      content: QuestionContent
    };

     // After create a question, send a notification to parent component
     // use createQuestionEvent in order to render the vertical navigation bar
    this.questionService
        .createQuestion(this.courseId, this.userId, questionObj)
        .then(questions => this.questions = questions)
        .then(() => this.createQuestionEvent.emit('message'));
  }
  ngOnInit() {
  }
}
