import {handle_Data} from './../Constants'
export const handleData=(data)=>{
    console.log('action',data);
    return{
        type:handle_Data,
        data:data,
    }
}
export const Login_Account=(data)=>{
    console.log('action',data);
    return{
        type:handle_Data,
        data:data,
    }
}
