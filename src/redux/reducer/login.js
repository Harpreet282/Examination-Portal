const initialState = {
    authenticated: false,
    userType:''
};
                        
const loginState=(state=initialState,action)=>{

    switch(action.type){
        case 'LOGIN':
            const token=action.payload.token;
            const userType=action.payload.userType;
            // console.log(userType)
            const data={
                token,
                userType
            }
            localStorage.setItem('data',JSON.stringify(data))
            // return state=token
            return {
                ...state,
                authenticated: true,
            };

        case 'LOGOUT':
             localStorage.removeItem('data')
               return state=false
        default:
            return state;
    }

};

export default loginState;