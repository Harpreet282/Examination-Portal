import axios from "axios";
import {
  ADMIN_PROFILE,
  REQUESTS_API,
  UPDATE_REQUESTS_API,
} from "../../Apis/apis";

const AdminProfileAxios = (token) => {
  return axios.get(ADMIN_PROFILE, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const RequestsAxios = (token,status,pageIndex) => {
  return axios.get(REQUESTS_API+'?status='+status+'&pageSize=5&pageIndex='+pageIndex, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
const ActionsHandleAxios = (data, token) => {
  return axios.put(UPDATE_REQUESTS_API, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
const SearchRequestsAxios=(token,status,searchPageIndex,searchTerm)=>{
  return axios.get(REQUESTS_API+'?status='+status+'&pageIndex='+searchPageIndex+'&pageSize=5&search='+searchTerm, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export {
  AdminProfileAxios,
  ActionsHandleAxios,
  SearchRequestsAxios,
  RequestsAxios,
};
