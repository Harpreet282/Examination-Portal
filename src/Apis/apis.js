export const API_BASE_URL = "https://exam-portal-by-hritik-sanam.herokuapp.com";

export  const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

<<<<<<< HEAD
 const LOGIN_API = getApiUrl('/login');
 const SIGN_UP_API = getApiUrl('/register');
 const PENDING_REQUESTS_API = getApiUrl('/admin/examiners/pending');
 const APPROVED_REQUESTS_API = getApiUrl('/admin/examiners/approved');
 const DECLINED_REQUESTS_API = getApiUrl('/admin/examiners/declined');
 const UPDATE_REQUESTS_API = getApiUrl('/admin/examiner/action');

export {
    LOGIN_API,SIGN_UP_API,PENDING_REQUESTS_API,APPROVED_REQUESTS_API,DECLINED_REQUESTS_API,UPDATE_REQUESTS_API
};
=======
export const LOGIN_API = getApiUrl('/login');
export const SIGN_UP_API = getApiUrl('/register');
export const PENDING_REQUESTS_API = getApiUrl('/admin/examiners/pending');
export const APPROVED_REQUESTS_API = getApiUrl('/admin/examiners/approved');
export const DECLINED_REQUESTS_API = getApiUrl('/admin/examiners/declined');
export const UPDATE_REQUESTS_API = getApiUrl('/admin/examiners/action');
export const CREATE_COURSE_API = getApiUrl('/examiner/course');
export const VIEW_COURSES =getApiUrl('/examiner/dashboard');
export const CREATE_STUDENT =getApiUrl('/examiner/student');
export const VIEW_STUDENT =getApiUrl('/examiner/students/');
export const ADD_SUBECT =getApiUrl('/examiner/subjects');
export const VIEW_SUBECTS =getApiUrl('/examiner/subjects/');
>>>>>>> 9bc6dec142c5ed6189272c91af0a8aded061927d
