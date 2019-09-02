export class CourseServiceClient {


    getSchools = () =>
        fetch('http://localhost:8080/getschools', {
            credentials: 'include'
        }).then(response => response.json())



    dropCourse = (courseId, userId) =>
        fetch('http://localhost:8080/api/dropCourse' + '/' + courseId + '/' + userId, {
            method: 'delete',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'true'
            },
            credentials: 'include'
        }).then(response => response.json());


    createCourse = (userId, majorId, courseName) =>
        fetch('http://localhost:8080/createCourse' + '/' + userId + '/' + majorId, {
            method: 'post',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            },
            body: courseName
        }).then(response => response.json())





    enroll = (userId, courseId) =>
        fetch('http://localhost:8080/api/enrollCourse' + '/' + userId + '/' + courseId, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'true'
            },
            credentials: 'include'
        })

    getCourseById = (courseId) =>
        fetch('http://localhost:8080/api/getCourseById' + '/' + courseId, {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'true'
            },
            credentials: 'include'
        }).then(response => response.json())
}
