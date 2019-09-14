import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {QuestionServiceClient} from '../services/question.service.client';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
  isOwner: boolean;
  updatedCourse = [];
  owner = {};
  answers = [];

  @Input('currentUserData') public  currentUser;
  @Input('questionData') public selectedQuestion;
  @Input('courseData') public courseId;

  @Output() public deleteQuestionEvent = new EventEmitter();


  constructor(private questionService: QuestionServiceClient) { }


  deleteQuestion(qid) {
      console.log(qid);
      this.questionService.deleteQuestion(qid, this.currentUser.id, this.courseId)
          .then(courses => this.updatedCourse = courses)
          .then(() => this.deleteQuestionEvent.emit('message'));
  }

  editQuestion(qid) {
      const x = document.getElementById('questionTitle');
      const y = document.getElementById('questionContent');
      x.removeAttribute('disabled');
      y.removeAttribute('disabled');

      console.log(qid);
  }

  saveEditedQuestion() {
    console.log('Dd');
  }

  showCommentArea() {
      const x = document.getElementById('commentArea');
      x.style.display = 'block';
  }

  createAnswer(answer) {
      console.log(answer);
      const answerObj = {
          content: answer
      };
      this.questionService.createAnswer(this.currentUser.id, this.selectedQuestion.id, answerObj)
          .then(answers => this.answers = answers);
  }

  ngOnInit() {
    this.questionService.isCurrentUserOwner(this.selectedQuestion.id, this.currentUser.id)
        .then(response => {
          if (response.status === 200) {
            this.isOwner = true;
          }
          if (response.status !== 200) {
           this.isOwner = false;
          }
        });

    this.questionService.getQuestionOwner(this.selectedQuestion.id)
        .then(owner => this.owner = owner);

    this.questionService.findAllAnswersForQuestion(this.selectedQuestion.id)
        .then(answers => this.answers = answers);



  }

}
