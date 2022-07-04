export const API_BASE_URL = "https://exam-portal-by-hritik-sanam.herokuapp.com";

export  const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

 const LOGIN_API = getApiUrl('/login');
 const SIGN_UP_API = getApiUrl('/register');
 const PENDING_REQUESTS_API = getApiUrl('/admin/examiners/pending');
 const APPROVED_REQUESTS_API = getApiUrl('/admin/examiners/approved');
 const DECLINED_REQUESTS_API = getApiUrl('/admin/examiners/declined');
 const UPDATE_REQUESTS_API = getApiUrl('/admin/examiner/action');

export {
    LOGIN_API,SIGN_UP_API,PENDING_REQUESTS_API,APPROVED_REQUESTS_API,DECLINED_REQUESTS_API,UPDATE_REQUESTS_API
};