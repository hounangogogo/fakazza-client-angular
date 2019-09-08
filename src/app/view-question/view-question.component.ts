import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  @Input('questionData') public selectedQuestion;

  constructor() { }

  ngOnInit() {
  }

}
