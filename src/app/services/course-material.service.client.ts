import { Injectable } from '@angular/core';
import { map } from  'rxjs/operators';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';

@Injectable()
export class CourseMaterialServiceClient {

  constructor(
      private httpClient: HttpClient
  ) { }

  postFile(fileToUpload: File) {
    const endpoint = 'http://localhost:8080/fileUpload';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient.post(endpoint, formData, {
      reportProgress: true, observe: 'events'
    }).pipe(map((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };
        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    }));
  }

}
