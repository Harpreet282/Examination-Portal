const initialState = {
   payload:{},data:[]
};
                        
const examCreateReducer=(state=initialState,action)=>{

    switch(action.type){
        case 'CREATE_EXAM':
            const Data=action.payload;
            console.log(Data,'reducer');
            localStorage.setItem('Data',JSON.stringify(Data))
            // return state=token
            return {
                ...state,
                payload:Data
            };
            case 'QUESTION_DETAILS':
                const data=action.data;
                console.log(data,'reducer');
                localStorage.setItem('Data',JSON.stringify(data))
                // return state=token
                return {
                    data:data
                };
            
        // case 'Student_id':
        //     const studentID=action.id;
        //     console.log(studentID,'reducerid')
        //     localStorage.setItem('StudentId',JSON.stringify(studentID))
        //     // return state=token
        //     if(state.students.includes(studentID)){
        //         return{
        //         ...state
        //         }
        //     }
        //     else{
        //         return {
        //            payload : state.payload,
        //            students: [...state.students,studentID]
        //         }
        //     };    
        default:
            return state;
    }

};

export default examCreateReducer;