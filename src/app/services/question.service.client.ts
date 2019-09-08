import {Injectable} from '@angular/core';


@Injectable()
export class QuestionServiceClient {

    createQuestion = (courseId, userId, questionObj) =>
        fetch('http://localhost:8080/api/createQuestion' + '/' + courseId + '/' + userId, {
            method: 'post',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            },
            body: JSON.stringify(questionObj)
        }).then(response => response.json())

}
