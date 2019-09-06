import { Component, OnInit } from '@angular/core';
import { CourseMaterialServiceClient } from '../services/course-material.service.client';

@Component({
  selector: 'app-course-material',
  templateUrl: './course-material.component.html',
  styleUrls: ['./course-material.component.css']
})
export class CourseMaterialComponent implements OnInit {

  fileToUpload: File = null;

  constructor(
      private courseMaterialService: CourseMaterialServiceClient
  ) { }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.courseMaterialService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
