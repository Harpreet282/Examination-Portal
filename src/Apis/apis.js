export const API_BASE_URL = "https://exam-portal-by-hritik-sanam.herokuapp.com";

export  const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const LOGIN_API = getApiUrl('/login');
export const SIGN_UP_API = getApiUrl('/register');
export const PENDING_REQUESTS_API = getApiUrl('/admin/examiners/pending');
export const APPROVED_REQUESTS_API = getApiUrl('/admin/examiners/approved');
export const DECLINED_REQUESTS_API = getApiUrl('/admin/examiners/declined');
export const UPDATE_REQUESTS_API = getApiUrl('/admin/examiners/action');