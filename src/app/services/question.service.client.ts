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

    findQuestionById = (questionId) =>
        fetch('http://localhost:8080/api/findQuestionById' + '/' + questionId, {
            method: 'get',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            }
        }).then(response => response.json())


    isCurrentUserOwner = (qid, uid) =>
        fetch('http://localhost:8080/api/isCurrentUserOwner' + '/' + qid + '/' + uid, {
            method: 'get',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            }
        })

    deleteQuestion = (qid, uid, cid) =>
        fetch('http://localhost:8080/api/deleteQuestion' + '/' + qid + '/' + uid + '/' + cid, {
            method: 'delete',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            }
        }).then(response => response.json())

}
