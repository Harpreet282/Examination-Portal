const API_BASE_URL = 'https://exam-portal-by-hritik-sanam.herokuapp.com';

const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
const LOGIN_API = getApiUrl('/login');
const SIGN_UP_API = getApiUrl('/register');
const PENDING_REQUESTS_API = getApiUrl('/admin/examiners/pending');
const APPROVED_REQUESTS_API = getApiUrl('/admin/examiners/approved');
const DECLINED_REQUESTS_API = getApiUrl('/admin/examiners/declined');
const UPDATE_REQUESTS_API = getApiUrl('/admin/examiners/action');
const REQUESTS_API = getApiUrl('/admin/examiners');
const CREATE_COURSE_API = getApiUrl('/examiner/course');
const VIEW_COURSES = getApiUrl('/examiner/dashboard');
const CREATE_STUDENT = getApiUrl('/examiner/student');
const VIEW_STUDENT = getApiUrl('/examiner/students/');
const ADD_SUBECT = getApiUrl('/examiner/subjects');
const VIEW_SUBECTS = getApiUrl('/examiner/subjects/');
const ADMIN_PROFILE = getApiUrl('/admin/dashboard/');
const STUDENT_PROFILE = getApiUrl('/student/dashboard/');
const EXAMINER_PROFILE = getApiUrl('/examiner/dashboard/');
const EXAM_DASHBOARD = getApiUrl('/student/exams');
const EXAM_ACCESSCODE = getApiUrl('/student/accessExam');
const UPDATE_PROFILE_API=getApiUrl('/admin/profile')
const VIEWALLSTUDENT_API =getApiUrl('/examiner/allStudents');
const DELETE_SUBJECT = getApiUrl('/examiner/subject');
const DELETE_STUDENT = getApiUrl('/examiner/student');
const DELETE_COURSE = getApiUrl('/examiner/course');
const UPDATED_PROFILE =getApiUrl('/examiner/profile');
const UPDATED_QUESTION =getApiUrl('/examiner/question');
const UPDATE_STUDENT=getApiUrl('/examiner/student');
const UPDATED_SUBJECT=getApiUrl('/examiner/subject');
const DELETE_QUESTION = getApiUrl('/examiner/question');
const DECLARE_RESULT=getApiUrl('/examiner/result')
const VIEW_EXAM = getApiUrl('/examiner/exams');
const CREATE_EXAM =getApiUrl('/examiner/createExam');


export {
  LOGIN_API, SIGN_UP_API, PENDING_REQUESTS_API, APPROVED_REQUESTS_API,UPDATE_STUDENT,UPDATED_QUESTION,
  DECLINED_REQUESTS_API, UPDATE_REQUESTS_API,DECLARE_RESULT,DELETE_QUESTION,UPDATED_PROFILE,DELETE_COURSE,
  CREATE_COURSE_API, VIEW_COURSES, CREATE_STUDENT, ADD_SUBECT,UPDATED_SUBJECT,DELETE_STUDENT,VIEW_EXAM,
  VIEW_SUBECTS, VIEW_STUDENT, ADMIN_PROFILE, STUDENT_PROFILE, EXAMINER_PROFILE,DELETE_SUBJECT,CREATE_EXAM,
  EXAM_DASHBOARD,EXAM_ACCESSCODE,UPDATE_PROFILE_API,REQUESTS_API,VIEWALLSTUDENT_API
  
};
