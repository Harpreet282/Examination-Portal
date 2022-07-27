import axios from "axios";
import {
  ADMIN_PROFILE,
  PENDING_REQUESTS_API,
  APPROVED_REQUESTS_API,
  DECLINED_REQUESTS_API,
  UPDATE_REQUESTS_API,
} from "../../Apis/apis";

const AdminProfileAxios = (token) => {
  return axios.get(ADMIN_PROFILE, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const NewRequestsAxios = (token) => {
  return axios.get(PENDING_REQUESTS_API, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const ApprovedRequestsAxios = (token) => {
  return axios.get(APPROVED_REQUESTS_API, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const DeclinedRequestsAxios = (token) => {
  return axios.get(DECLINED_REQUESTS_API, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
const ActionsHandleAxios = (data, token) => {
  return axios.put(UPDATE_REQUESTS_API, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export {
  AdminProfileAxios,
  NewRequestsAxios,
  ApprovedRequestsAxios,
  DeclinedRequestsAxios,
  ActionsHandleAxios,
};
