import {handle_Data,Login_Account} from "./../Constants";
const initialState={
    authenticated: false,
}
export default function DataItems(state=[],action){
    switch(action.type){
        case handle_Data:
            console.log('reducer',action)
        return[
            ...state,
           action.data
        ]
       
        default:
            return state
    }
}
export  function Login_Data(state=initialState,action){
  
    switch(action.type){
        case handle_Data:
            const token=action.data;
            console.log('reducer',action)
            localStorage.setItem('data',JSON.stringify(token))
        return[{
            ...state,
           token,
           authenticated:true
    }]
     
        default:
            return state
    }
}

