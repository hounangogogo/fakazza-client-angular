export class CourseServiceClient {

  getSchools = () =>
    fetch('http://localhost:8080/getschools', {
      credentials: 'include'
    }).then(response => response.json())


  enroll = (userId, courseId) => {
    return fetch('http://localhost:8080/api/enrollCourse' + '/' + userId + '/' + courseId, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'true'
      },
      credentials: 'include'
    });
  }
}
