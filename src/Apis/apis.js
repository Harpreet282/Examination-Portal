const API_BASE_URL = 'https://exam-portal-by-hritik-sanam.herokuapp.com';

const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

const LOGIN_API = getApiUrl('/login');
const SIGN_UP_API = getApiUrl('/register');
const PENDING_REQUESTS_API = getApiUrl('/admin/examiners/pending');
const APPROVED_REQUESTS_API = getApiUrl('/admin/examiners/approved');
const DECLINED_REQUESTS_API = getApiUrl('/admin/examiners/declined');
const UPDATE_REQUESTS_API = getApiUrl('/admin/examiner/action');
const CREATE_COURSE_API = getApiUrl('/examiner/course');
const VIEW_COURSES = getApiUrl('/examiner/dashboard');
const CREATE_STUDENT = getApiUrl('/examiner/student');
const VIEW_STUDENT = getApiUrl('/examiner/students/');
const ADD_SUBECT = getApiUrl('/examiner/subjects');
const VIEW_SUBECTS = getApiUrl('/examiner/subjects/');
const ADMIN_PROFILE = getApiUrl('/admin/dashboard/');
const STUDENT_PROFILE = getApiUrl('/student/dashboard/');
const EXAMINER_PROFILE = getApiUrl('/examiner/dashboard/');

export {
  LOGIN_API, SIGN_UP_API, PENDING_REQUESTS_API, APPROVED_REQUESTS_API,
  DECLINED_REQUESTS_API, UPDATE_REQUESTS_API,
  CREATE_COURSE_API, VIEW_COURSES, CREATE_STUDENT, ADD_SUBECT, 
  VIEW_SUBECTS, VIEW_STUDENT, ADMIN_PROFILE, STUDENT_PROFILE, EXAMINER_PROFILE,

};
