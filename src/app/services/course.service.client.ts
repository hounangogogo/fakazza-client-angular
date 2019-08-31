export class CourseServiceClient {


  getCourseById = (courseId) => {
    return fetch('http://localhost:8080/api/getCourseById' + '/' + courseId, {
      method: 'get',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'true'
      },
      credentials: 'include'
    }).then(response => response.json());
  }

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


  getCourses = () =>
      fetch('http://localhost:8080/getCourses', {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Credentials': 'true'
        }
      }).then(response => response.json())

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

}
