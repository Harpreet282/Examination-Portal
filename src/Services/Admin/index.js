import axios from "axios";
import {
  ADMIN_PROFILE,
  REQUESTS_API,
  UPDATE_REQUESTS_API,
  UPDATE_PROFILE_API,
} from "../../Apis/apis";

const AdminProfileAxios = (token) => {
  return axios.get(ADMIN_PROFILE, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const RequestsAxios = (token,status,pageIndex,search,searchIndex) => {
  if(search){
    return axios.get(REQUESTS_API+'?status='+status+'&pageSize=5&pageIndex='+searchIndex+"&search="+search, {
      headers: { Authorization: `Bearer ${token}` },
    });  
  }
  return axios.get(REQUESTS_API+'?status='+status+'&pageSize=5&pageIndex='+pageIndex, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
const ActionsHandleAxios = (data, token) => {
  return axios.put(UPDATE_REQUESTS_API, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateAdminProfileAxios=(values,token)=>{
  return axios.patch(UPDATE_PROFILE_API,values, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export {
  AdminProfileAxios,
  ActionsHandleAxios,
  RequestsAxios,
  UpdateAdminProfileAxios,
};
