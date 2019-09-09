import {Component, Input, OnInit} from '@angular/core';
import {QuestionServiceClient} from '../services/question.service.client';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
  isOwner: boolean;

  @Input('currentUserData') public  currentUser;
  @Input('questionData') public selectedQuestion;

  constructor(private questionService: QuestionServiceClient) { }

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



  }

}
