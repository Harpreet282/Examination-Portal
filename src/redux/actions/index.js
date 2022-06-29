export const loginAccount=(token,userType)=>{
    return{
        type:"LOGIN",
        payload:{
            token,
            userType
        },
    };
};


export const logoutAccount=()=>{
    return{
        type:"LOGOUT",
    };
};