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

const NewRequestsAxios = (token,pageIndex) => {
  return axios.get(PENDING_REQUESTS_API+'?status=pending&pageSize=5&pageIndex='+pageIndex, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const ApprovedRequestsAxios = (token,pageIndex) => {
  return axios.get(APPROVED_REQUESTS_API+'?status=approved&pageSize=5&pageIndex='+pageIndex, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const DeclinedRequestsAxios = (token,pageIndex) => {
  return axios.get(DECLINED_REQUESTS_API+'?status=declined&pageSize=5&pageIndex='+pageIndex, {
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
