import {Injectable} from '@angular/core';


@Injectable()
export class QuestionServiceClient {

    findAllAnswersForQuestion = (questionId) =>
        fetch('http://localhost:8080/api/findAllAnswersForQuestion' + '/' + questionId, {
            method: 'get',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            },
        }).then(response => response.json())


    createAnswer = (userId, questionId, answerObj) =>
        fetch('http://localhost:8080/api/createAnswer' + '/' + userId + '/' + questionId, {
            method: 'post',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            },
            body: JSON.stringify(answerObj)
        }).then(response => response.json())



    getQuestionOwner = (qid) =>
        fetch('http://localhost:8080/api/getQuestionOwner' + '/' + qid,{
            method: 'get',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            },
        }).then(response => response.json())


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
